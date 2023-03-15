import { useState, useEffect } from 'react'
import Overlay from "./components/Overlay"
import Question from "./components/Question"
import blobLeft from "./assets/blob-left.png"
import blobRight from "./assets/blob-right.png"

function App() {
  const [render, setRender] = useState(true)

  function hideOverlay() {
    setRender(false)
  }

  return (
    <main>
      
      {render ? <Overlay handleClick={hideOverlay}/> : <Question />}
      <img className="absolute__img left" src={blobLeft}/>
      <img className="absolute__img right" src={blobRight}/>
    </main>
  )
}

export default App
