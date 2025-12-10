import { useState } from 'react'
import './App.css'
import clock from './clock.jpg'
import { useEffect } from 'react'

function App() {
  const [current, setCurrent] = useState(new Date());
  const [t24, setT24] = useState();
  const date = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(new Date())
    }, 1000)

    return () => clearInterval(interval)   //unmounting - removes element from UI. Then, this line is called 
  }, [])

  let hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();
  let meridian = "";

  const handle12 = () => {
    setT24(true);

  }
  if (t24) {
    meridian = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12
  }
  const handle24 = () => {
    setT24(false);
    meridian="";
  }

  return (
    <>
      <style>
        {
          `
          body {
           margin: 0;
           padding-left: 50px;
           background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${clock});
           background-size: cover;        
           background-position: center;  
           background-repeat: no-repeat;  
           font-family: 'Poppins', sans-serif;
           height: 100vh;
           display: flex;
           align-items: center;
           justify-content:flex-end;
          }
        .block{
           border: 2px solid #00adb5;
           margin-right:200px;
           border-radius: 16px;
           padding: 40px 60px;
           background: #1e1e1e;
           color: #eeeeee;
            display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
           transition: transform 0.3s ease;
          } 
          .block:hover {
            transform: scale(1.1);
          }
        .time {
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #00adb5;
  text-shadow: 0 0 10px #00adb5;
}
  .button {
  display: flex;
  gap: 15px;
}
  button {
  background: #00adb5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}
  button:hover {
  background: #007b80;
  transform: translateY(-2px);
}

button:active {
  transform: scale(0.97);
}
        `
        }
      </style>
      <div className='block'>
        <h1 className='time'>
          {hours.toString().padStart(2, '0')} :
          {minutes.toString().padStart(2, '0')} :
          {seconds.toString().padStart(2, '0')} {meridian}
        </h1>
        <span className='button'>
          <button onClick={handle24} style={{ padding: '10px' }}>24 Hours</button>
          <button onClick={handle12} style={{ padding: '10px' }}>12 Hours</button>
        </span>

      </div>

    </>
  )
}

export default App
