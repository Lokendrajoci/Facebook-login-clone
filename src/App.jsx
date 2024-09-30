import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FbUi from "./components/FbUi";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FbUi/>
    </>
  )
}

export default App
