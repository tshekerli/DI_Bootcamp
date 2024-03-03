import React, { useState } from 'react';
import quotes from './quotes';

function randomColor() {
  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8C33', 
    '#33FFEC', '#8C33FF', '#FFFD33', '#33FF9E', '#FF3333', 
    '#A020F0', '#FFA07A', '#8A2BE2', '#7FFF00', '#D2691E', 
    '#DC143C', '#00FFFF', '#00008B', '#B8860B', '#A9A9A9', 
    '#006400', '#BDB76B', '#8B008B', '#556B2F', '#FF8C00'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function QuoteBox() {
  const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
  const [quote, setQuote] = useState(getRandomQuote());
  const [key, setKey] = useState(Math.random());

  const generateQuote = () => {
    setQuote(getRandomQuote());
    document.body.style.backgroundColor = randomColor();
    setKey(Math.random()); // change key to re-render container
  };

  return (
    <div className='container' key={key}>
      <p className='quote'>"{quote.quote}"</p>
      {quote.author && <p className='author'>-{quote.author}-</p>}
      <button className='quotebutton' onClick={generateQuote}>New quote</button>
    </div>
  );
}

export default QuoteBox;