import React from 'react'
import {useState} from 'react';
import quotes from './quotes.js'

const QuoteBox = ({quoteStr}) => {
  function selectQuoteIndex() {
    return Math.floor(Math.random()*quotes.length);
  };

  const [count, setCount] = useState(selectQuoteIndex());

  function getNewQuote() {
    let oldQuoteIndex = count;
    let newQuoteIndex;
    do {
        newQuoteIndex = selectQuoteIndex();
    } while (newQuoteIndex === oldQuoteIndex);
    setCount(newQuoteIndex);
  }

  return (
    <>
      <p>Click the button to get a quote</p>
      <button onClick={getNewQuote}>Get Quote #{count}</button>
      <blockquote>
        <p>quote goes here: {quotes[count].quote}</p>
        <footer>author goes here: {quotes[count].author}</footer>
      </blockquote>
    </>
  )
}

export default QuoteBox