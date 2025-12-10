import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getjokes } from './store/jokeapislice'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const { joke, loading } = useSelector((state) => state.jokeapi);
  console.log(joke)

  const handleJoke = () => {
    dispatch(getjokes())
  }


  return (
    <>
      {loading && <h1>Loading......</h1>}
      {
        joke && (
          <ul>{
          joke.map((j, idx) => (
            j.type == "single" ? (
              <li>Joke: {j.joke}</li>
            ) :
              (
                <>
                  <li>Setup: {j.setup} <br/> Delivery: {j.delivery}</li>
                </>
              )
          )
          )
        }</ul>
        )
      }
      <button onClick={handleJoke}>Get Joke</button>

    </>
  )
}

export default App
