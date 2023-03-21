import { useState, useEffect } from 'react'
import he from "he"
import Overlay from "./components/Overlay"
import Question from "./components/Question"
import Answer from "./components/Answer"
import blobLeft from "./assets/blob-left.png"
import blobRight from "./assets/blob-right.png"
import { nanoid } from 'nanoid'

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

      const questionItems = results.map((question, index) => {
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
          id: index
        }
      })
      setQuestionsArray(questionItems)
    }
    getQuestions()
  },[])
  
  function hideOverlay() {
    setRender(false)
  }

  function logAnswer(id, index) {
    // Working on here
    setQuestionsArray(prevQuestions => prevQuestions.map(question => {
      return id.target.id === question.id ? {
          ...question,
          answers: questionsArray[index].answers.map(item => {
            if(item.id === id.target.id) {
              return {
                ...item,
                isLogged: !item.isLogged
              }
            } else {
              return {...item,
              isLogged: false
              }
            }
          }),
      } : question
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
            <Answer 
              key={item.id}
              id={item.id}
              index={element.index}
              isLogged={item.isLogged}
              handleClick={logAnswer}
              text= {he.decode(item.text)}
            />
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