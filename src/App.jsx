import { useState, useEffect } from 'react'
import Overlay from "./components/Overlay"
import Question from "./components/Question"
import blobLeft from "./assets/blob-left.png"
import blobRight from "./assets/blob-right.png"
import { nanoid } from 'nanoid'

// Steps: 
//   * Give each answer an unique id
//     -> get Id on click
//   * tick the right id
//   * check if the logged answer is the right one

function App() {
  const [render, setRender] = useState(true)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
      const data = await res.json()
      const results = data.results

      const questionItems = results.map(question => {
        return {
          question: question.question,
          answers: [...question.incorrect_answers, question.correct_answer].map(obj => {
            return {
              text: obj,
              id: nanoid()
            }
          }),
          correct: question.correct_answer,
          isLogged: true,
        }
      })
      setQuestions(questionItems)
    }
    getQuestions()
  }, [])
  
  function hideOverlay() {
    // renders the question after pressing the overlay-button "allQuestions = Array"
    setRender(false)
  }

  function logAnswer(id) {
    console.log(id)
  }

  const questionHtml = questions.map(element => {
    return (
      <Question 
        key={nanoid()}
        question={element.question}
        answers={element.answers}
        correct={element.correct}
        isLogged={element.isLogged}

        logAnswer={() => logAnswer(element.answers)}
      />
    )
  })

  return (
    <main>
      {render ? <Overlay handleClick={hideOverlay}/> : 
      <section className='question--wrapper'>
        {questionHtml}
        <button>Check answers</button>
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