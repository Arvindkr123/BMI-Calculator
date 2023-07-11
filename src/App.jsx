import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  const calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter valid input fields!!!')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage('You\'re underweight');
      } else if (bmi >= 25 && bmi <= 30) {
        setMessage('You have a healthy weight!!')
      } else {
        setMessage('You are overweight!!')
      }
    }
  }

  const reload = () => {
    window.location.reload();
  }
  return (
    <div className='App'>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder='enter your weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input type="text" placeholder='enter your height' value={height} onChange={(e) => setHight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
