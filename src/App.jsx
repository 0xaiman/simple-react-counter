import { useState } from 'react'

import './App.css'

import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Simple React Project</h1>
    <Counter></Counter>
      
    </>
  )
}

export default App
