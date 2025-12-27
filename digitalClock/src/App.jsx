import { useState, useEffect } from "react";
import "./App.css";
import ResponsiveNavbar from "./navbar.jsx"; 

function App() {
  const [current, setCurrent] = useState(new Date());
  const [t24, setT24] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setCurrent(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  let hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();
  let meridian = "";

  if (t24) {
    meridian = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
  }

  const handle12 = () => setT24(true);
  const handle24 = () => setT24(false);

  return (
    <>
      <ResponsiveNavbar />

      {/* Clock container */}
      <div className="clock-container">
        <div className="block">
          <h1 className="time">
            {hours.toString().padStart(2, "0")} :
            {minutes.toString().padStart(2, "0")} :
            {seconds.toString().padStart(2, "0")} {meridian}
          </h1>

          <span className="button">
            <button onClick={handle24}>24 Hours</button>
            <button onClick={handle12}>12 Hours</button>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
