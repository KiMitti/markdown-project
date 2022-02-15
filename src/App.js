import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  //adding a comment so theres a change
  const [markdown, setMarkdown] = useState('## Markdown preview');
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
        />
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
