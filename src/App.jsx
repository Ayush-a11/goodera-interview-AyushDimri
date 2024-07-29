import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Use_context from './Context/Use-context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Use_context>
      <h1 className="bg-red-400">PokeMoon</h1>

      <Home/>
    </Use_context>
    </>
  )
}

export default App
