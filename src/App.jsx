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
      <button className='reload_btn'>Check answers</button>
    </main>
  )
}

export default App
