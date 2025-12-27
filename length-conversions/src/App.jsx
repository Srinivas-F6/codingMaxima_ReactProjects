import { useState } from 'react'
import './App.css'
import ResponsiveNavbar from './navbar';

function App() {
  const [kg, setKg] = useState("");
  const [lb, setLb] = useState("");


  const ConvertToLb = (e) => {
    const val = e.target.value;
    setKg(val);
    if (val === "") {
      setLb("");
    }
    else {
      setLb((val * 2.20462).toFixed(2));
    }
  };

  const ConvertToKg = (e) => {
    const val = e.target.value;
    setLb(val);
    if (val === "") {
      setKg("");
    }
    else {
      setKg((val * 0.456).toFixed(2));
    }
  };


  return (
    <>
    <ResponsiveNavbar/>
      <div className='block'>
        <label htmlFor='Enter' className='name'>Kilograms</label><br />
        <input type='number' placeholder='1kg -> 2.20lb' value={kg} onChange={ConvertToLb} required /><br />

        <label htmlFor='Enter' className='name'>Pounds</label><br />
        <input type='number' placeholder='1lb -> 0.45kg' value={lb} onChange={ConvertToKg} required />
      </div>
    </>
  )
}

export default App
