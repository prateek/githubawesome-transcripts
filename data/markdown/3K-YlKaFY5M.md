# Dash: A data agent that remembers its mistakes, Inspired by OpenAI's internal data tooling

[Watch the original video](https://www.youtube.com/watch?v=3K-YlKaFY5M)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=3K-YlKaFY5M&t=0)

- https://github.com/agno-agi/dash

Agno open-source Dash, a data agent that remembers its mistakes. Inspired by OpenAI's internal data tooling, most texttosql tools are stateless. They hallucinate a column name, crash, and make the same mistake tomorrow. Dash stores context, business definitions, schema info, past queries, and uses it to ground new queries. When it writes bad SQL, it logs the error and the fix. Over time, it stops making the same mistakes.
