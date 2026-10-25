"""Bounded, unauthenticated hosted-runner experiment; never writes the dataset."""

import json
import signal
import subprocess
import sys
import time
import urllib.request

VIDEO = "z6QVBXljJwk"
URL = f"https://www.youtube.com/watch?v={VIDEO}"


def report(method, **result):
    print(json.dumps({"method": method, **result}), flush=True)


proc = subprocess.Popen(
    [sys.executable, "scripts/probe-runtime/camofox-runtime.py", "run"],
    stdout=subprocess.PIPE, text=True,
)
try:
    receipt = json.loads(proc.stdout.readline())
    if not receipt.get("ready"):
        raise RuntimeError(receipt)
    report("runtime", ready=True)
    base = receipt["baseUrl"]
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))

    def api(path, data=None):
        request = urllib.request.Request(
            base + path,
            data=json.dumps(data).encode() if data is not None else None,
            headers={"Content-Type": "application/json"},
        )
        with opener.open(request, timeout=150) as response:
            return json.loads(response.read(2_000_000))

    result = api("/youtube/transcript", {"url": URL})
    report("camofox-browser-fallback", **{
        key: value for key, value in result.items() if key != "transcript"
    }, transcript_characters=len(result.get("transcript", "")))
    tab = api("/tabs", {"userId": receipt["userId"], "sessionKey": receipt["sessionKey"], "url": URL})
    report("tab", **tab)
    tab_id = tab.get("tabId", tab.get("id"))

    def evaluate(expression):
        return api(f"/tabs/{tab_id}/evaluate", {"userId": receipt["userId"], "expression": expression})

    time.sleep(5)
    report("watch-dom", result=evaluate("JSON.stringify({text:document.body.innerText.slice(0,3500), buttons:Array.from(document.querySelectorAll('button')).map(x=>x.innerText||x.getAttribute('aria-label')).filter(Boolean)})"))
    report("expand-description", result=evaluate("document.querySelector('#expand')?.click(); 'clicked if present'"))
    time.sleep(2)
    report("open-transcript", result=evaluate("(()=>{const b=Array.from(document.querySelectorAll('button')).find(x=>x.innerText.trim()==='Show transcript'); if(b){b.click();return true} return false})()"))
    time.sleep(5)
    report("transcript-dom", result=evaluate("JSON.stringify({segments:document.querySelectorAll('ytd-transcript-segment-renderer').length, text:document.body.innerText.slice(-4500)})"))
    report("structured", result=evaluate(r"""(()=>{
      const script = Array.from(document.scripts).find(x=>x.textContent.startsWith('var ytInitialPlayerResponse = '))?.textContent;
      const match = script?.match(/^var ytInitialPlayerResponse = (.*?);(?:var |$)/s);
      const player = match ? JSON.parse(match[1]) : {};
      const d=player.videoDetails||{}, m=player.microformat?.playerMicroformatRenderer||{};
      const segments=Array.from(document.querySelectorAll('transcript-segment-view-model')).map(x=>({timestamp:x.querySelector('.ytwTranscriptSegmentViewModelTimestamp')?.textContent,text:x.querySelector('span[role=text]')?.textContent}));
      const first=document.querySelector('transcript-segment-view-model');
      return JSON.stringify({metadata:{id:d.videoId,title:d.title,channel_id:d.channelId,duration:d.lengthSeconds,description:d.shortDescription,published:m.publishDate},segments,parents:first?Array.from((function*(x){for(let i=0;x&&i<7;i++,x=x.parentElement)yield x})(first)).map(x=>({tag:x.tagName,cls:x.className,text:x.innerText.slice(0,150)})):[],scriptNames:Array.from(document.scripts).filter(x=>x.textContent.startsWith('var ytInitial')).map(x=>x.textContent.slice(0,60))});
    })()"""))

except Exception as error:
    report("camofox-exception", error=type(error).__name__, detail=str(error)[:500])
finally:
    proc.send_signal(signal.SIGINT)
    try:
        output, _ = proc.communicate(timeout=60)
        print(output, flush=True)
    except subprocess.TimeoutExpired:
        proc.kill()
        proc.wait()
        report("cleanup", failed=True)

try:
    from youtube_transcript_api import YouTubeTranscriptApi
    result = YouTubeTranscriptApi().fetch(VIDEO)
    report("youtube-transcript-api", segments=len(result), words=sum(len(x.text.split()) for x in result))
except Exception as error:
    report("youtube-transcript-api", error=type(error).__name__)
