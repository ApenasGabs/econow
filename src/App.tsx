import { useState } from 'react'
import ecoNowLogo from '../public/android-chrome-512x512.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={ecoNowLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Echo Now</h1>
      <h2>Menos gastos, mais sustentabilidade.</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click to plant a tree {count}
        </button>
      </div>
    </>
  )
}

export default App
