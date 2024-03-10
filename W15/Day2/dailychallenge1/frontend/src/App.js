import React, { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    
    
    if (!name.trim()) {
      alert('Input cannot be empty');
      return;
    }
  
    fetch('http://localhost:3001/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: name }),
    })
      .then(response => response.json())
      .then(body => {
        console.log(body);
        setResponse(body.message);
      });
  };
  return (
    <div>
      <p>Hello From Express</p>
      <form onSubmit={submit}>
        <label> Post to Server:</label> <br />
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default App;
