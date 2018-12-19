import React, { useState, useEffect } from 'react';
import axios from "axios";

function Example() {
  const [todos, addTodo] = useState(['sida', 'bird'])
  const [text, setInput] = useState('')

  const handleAdd = () => {
      addTodo([...todos, text])
      setInput('')
  }

  const news = useEndpont({
      method: 'GET',
      url: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=69a18fbdc32b41bdaba92fb40f0ed840'
  })

  return (
    <div>
      <div>
          <h3>Todos: </h3>
          <h4>text here {text}</h4>
          <input
            onChange={(e) => setInput(e.target.value)} 
            value={text}
          />
          <button onClick={handleAdd}>Add</button>
          <ul>
              {
                  news.pending && 'Loading... ' ||
                  (news.complete && news.data.articles.map((item, idx) => (<li key={idx}>{item.title}</li>)))
              }
          </ul>
      </div>
    </div>
  );
}

function useEndpont(req) {
    const [res, setRes] = useState({
        data: null,
        complete: false,
        pending: false,
        error: false
      });
    useEffect(
        () => {
          setRes({
            data: null,
            pending: true,
            error: false,
            complete: false
          });
          axios(req)
            .then(res =>
              setRes({
                data: res.data,
                pending: false,
                error: false,
                complete: true
              }),
            )
            .catch(() =>
              setRes({
                data: null,
                pending: false,
                error: true,
                complete: true
              }),
            );
        },
        [req.url]
      );
    return res;
}

export default Example