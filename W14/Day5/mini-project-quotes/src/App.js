import React, { useState } from 'react';
import quotes from './quotes';

function QuoteBox() {
  const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
  const [quote, setQuote] = useState(getRandomQuote());

  const generateQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div className='container'>
      <p className='quote'>"{quote.quote}"</p>
      {quote.author && <p className='author'>-{quote.author}-</p>}
      <button className='quotebutton' onClick={generateQuote}>New quote</button>
    </div>
  );
}

export default QuoteBox;