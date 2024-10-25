import { useState } from 'react'
import './App.css'
import CalcBody from './CalcBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalcBody/>
    </>
  )
}

export default App
