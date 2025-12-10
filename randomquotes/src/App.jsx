import { useState } from 'react'
import './App.css'
import {motivationalquotes } from './quotes'

function App() {
  const[quote, setQuote] = useState([])


  const handleQuotes = ()=>{
    const quotes = [];
    for(let i=0; i<5; i++){
      quotes.push(motivationalquotes[Math.floor(Math.random()*motivationalquotes.length)]);
    }
    setQuote(quotes);
  }
  return (
    <>
     {
      quote.length>0 && (
        quote.map((val,idx)=>{
         return  <p key={idx}>{val}</p>                  // If I use ' () ' instead of '{}', no need to use return.
        })
      )
     }
     <button onClick={handleQuotes}>Get Quotes</button>
    </>
  )
}

export default App
