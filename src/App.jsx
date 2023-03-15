import { useState, useEffect } from 'react'
import Overlay from "./components/Overlay"
import blobLeft from "./assets/blob-left.png"
import blobRight from "./assets/blob-right.png"
import { nanoid } from 'nanoid'

function App() {
  const [render, setRender] = useState(true)
  const [allQuestions, setAllQuestions] = useState([])

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple")
      const data = await res.json()
      setAllQuestions(data.results)
      // renders the question after pressing the overlay-button "allQuestions = Array"
    }
    getQuestions()
  }, [render])

  function hideOverlay() {
    setRender(false)
  }

  const questionHtml = allQuestions.map(question => {
    return (
      <div key={nanoid()} className="question">
          <h2 className="t_h2">{question.question}</h2>
          <div className="answer__wrapper">
              <div className="answer">{question.correct_answer}</div>
          </div>
      </div>
    )
  })

  return (
    <main>
      {render ? <Overlay handleClick={hideOverlay}/> : 
      <section className='question--wrapper'>
        {questionHtml}
      </section>}
      <img className="absolute__img left" src={blobLeft}/>
      <img className="absolute__img right" src={blobRight}/>
    </main>
  )
}

export default App

// category: "Entertainment: Video Games"
// correct_answer: "Chronal Accelerator"
// difficulty: "hard"
// incorrect_answers: (3) ['B.L.I.N.K', 'Spacial Displacement Manipulator', 'TMD (Time Manipulation Device)']
// question: "What device allows Tracer to manipulate her own time in the game &quot;Overwatch&quot;?"
// type: "multiple"