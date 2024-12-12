import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        React Counter +PraTI
      </h1>
      <h2>
        {count === 0 ? "Click on the right button" : 
         count > 15 ? `Better Stop clicking me! Clicked ${ count } times` : `You added ${ count } times!`
        }    
      </h2>

      <button disabled={count === 0} onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={addCount}>
        {
          count === 0 ? "Click me! 😊":
          count > 15 ? "Stop clicking me! 😢" : "Add"
        }
      </button>
    </>
  )
}

export default App
