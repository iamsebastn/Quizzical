import { useState, useEffect } from 'react'
import Overlay from "./components/Overlay"
import Question from "./components/Question"
import blobLeft from "./assets/blob-left.png"
import blobRight from "./assets/blob-right.png"
import { nanoid } from 'nanoid'
import { event, get } from 'jquery'

// Steps: 
//   * Give each answer an unique id ✅
//     -> get Id on click ✅
//   * tick the right id
//   * check if the logged answer is the right ones

function App() {
  const [render, setRender] = useState(true)
  const [questionsArray, setQuestionsArray] = useState([])

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
              id: nanoid(),
              isLogged: false,
            }
          }),
          correct: question.correct_answer,
        }
      })
      setQuestionsArray(questionItems)
    }
    getQuestions()
  },[])
  
  function hideOverlay() {
    setRender(false)
    console.log(questions[0].answers)
  }

  function logAnswer(id) {
    console.log(id)
    // work in it till only one answer per question can be ticked. 
    setQuestionsArray(prevQuestions => prevQuestions.map((question, index) => {
      return {
          question: question.question,
          answers: question.answers.map(item => {
            if(item.id === id) {
              return {
                ...item,
                isLogged: !item.isLogged
              }
            } else {
              return item
            }
          }),
          correct: question.correct,
          id: index
      }
    }))
  }

  const questionHtml = questionsArray.map(element => {
    return (
      <Question 
        key={nanoid()}
        id={element.id}
        question={element.question}
        answers={element.answers.map(item => {
          return (
            <div
              key={item.id}
              className='answer'
              isLogged={item.isLogged}
              style={{backgroundColor: item.isLogged ? "#D6DBF5" : "#F5F7FB"}}
            >
              {item.text}
            </div>
          )
        })}
        correct={element.correct}
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