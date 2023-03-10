import { useState } from 'react'
import Overlay from "./components/Overlay"

function App() {
  const [render, setRender] = useState(false)

  function renderScreen() {
    setRender(prevRender => !prevRender)
  }
  
  return (
    <>
      {render ? <h1>This one is rendered</h1> : <Overlay render={renderScreen}/> }
    </>
  )
}

export default App
