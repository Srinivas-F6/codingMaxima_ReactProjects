import { useState } from 'react'
import './App.css'
import { motivationalquotes } from './quotes'
import ResponsiveNavbar from './navbar'

function App() {
  const [quote, setQuote] = useState([])


  const handleQuotes = () => {
    const quotes = [];
    for (let i = 0; i < 5; i++) {
      quotes.push(motivationalquotes[Math.floor(Math.random() * motivationalquotes.length)]);
    }
    setQuote(quotes);
  }
  return (
    <>
      <ResponsiveNavbar />

      <div className="quotes-wrapper">
        {quote.length > 0 &&
          quote.map((val, idx) => (
            <p key={idx} className="quote-text">
              {val}
            </p>
          ))}
      </div>

      <button className="get-quotes-btn" onClick={handleQuotes}>
        Get Quotes
      </button>
    </>

  )
}

export default App
