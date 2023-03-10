import { useState } from 'react'
import Overlay from "./components/Overlay"
import Questions from "./components/Questions"

function App() {
  const [render, setRender] = useState(false)

  function renderScreen() {
    setRender(prevRender => !prevRender)
  }
  
  return (
    <main>
      {render ? <Questions /> : <Overlay render={renderScreen}/> }
    </main>
  )
}

export default App
