import { useState } from 'react'
import './App.css'
import ResponsiveNavbar from './navbar';

function App() {

  const [feet, setFeet] = useState("");
  const [inch, setInch] = useState("");
  const[unit,setUnit] = useState("");

  const feetToInch = (e) => {
    if (feet != "") {
      setInch(Number(feet) * 12);
      setUnit("inches");
    }
  }

  const cmToInch = () => {
    if (feet != "") {
      setInch(Number(feet) * (0.393));
      setUnit("inches");
    }
  }

  return (
    <>
    <ResponsiveNavbar/>
      <div className='block'>
        <label>Enter the value:</label>
        <input type='number' placeholder='Enter Value' value={feet} onChange={(e) => setFeet(e.target.value)} required />

        <label>
          <input type='radio' name='unit' value="feet" onChange={feetToInch} required />
          Feet
        </label>
        <label>
          <input type='radio' name='unit' value="cm" onChange={cmToInch} />
          CM
        </label>


        <h1>{inch} {unit}</h1>
      </div>
    </>
  )
}

export default App
