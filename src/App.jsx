import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import New from './components/New'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <About></About>
        <New></New>
      </div>
     
    </>
  )
}

export default App
