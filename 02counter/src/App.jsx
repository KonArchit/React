import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
    // let counter = 15

    const addValue = () => {
      if(counter < 20){
        setCounter(counter+1)
        console.log("Clicked", counter)
      }else{
        console.log("Not able to click because the value is more than 20")
      }
    }

    const removeValue = () => {
      if(counter > 0){
        setCounter(counter-1)
        console.log("Clicked", counter)
      }else{
        console.log("Not able to click because the value is less than 0")
      }
    }

  return (
    <>
      <h1>Counter: {counter} </h1>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
