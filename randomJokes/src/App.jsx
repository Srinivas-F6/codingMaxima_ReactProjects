import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getjokes } from './store/jokeapislice';
import './App.css';
import ResponsiveNavbar from './navbar';

function App() {
  const dispatch = useDispatch();
  const { joke, loading } = useSelector((state) => state.jokeapi);

  const handleJoke = () => {
    dispatch(getjokes());
  };

  return (
    <>
      <ResponsiveNavbar />
      <div className="joke-container">
        {loading && <h1 className="loading">Loading......</h1>}

        {joke && (
          <ul>
            {joke.map((j, idx) =>
              j.type === "single" ? (
                <li key={idx}>Joke: {j.joke}</li>
              ) : (
                <li key={idx}>
                  Setup: {j.setup} <br /> Delivery: {j.delivery}
                </li>
              )
            )}
          </ul>
        )}

        <div className="button-container">
          <button onClick={handleJoke}>Get Joke</button>
        </div>
      </div>
    </>
  );
}

export default App;
