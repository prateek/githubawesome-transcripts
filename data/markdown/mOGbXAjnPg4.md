# Jev Ultrafast: a browser agent that never generates a coordinate or a selector

[Watch the original video](https://www.youtube.com/watch?v=mOGbXAjnPg4)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=mOGbXAjnPg4&t=0)

- https://github.com/browser-use/jev-ultrafast

Jev Ultraast clicks through a web page without generating a single coordinate or selector. Most browser agents screenshot the page, feed it to a vision model, and wait while it writes out where to click step after step. This one reads the DOM directly, builds an index table of clickable elements, and makes two decisions, action and target, in one network round
