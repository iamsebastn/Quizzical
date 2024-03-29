import { useState, useEffect } from 'react'
import he from "he"
import Overlay from "./components/Overlay"
import Question from "./components/Question"
import Answer from "./components/Answer"
import blobLeft from "./assets/blob-left.png"
import blobRight from "./assets/blob-right.png"
import { nanoid } from 'nanoid'

function App() {
  const [render, setRender] = useState(true)
  const [questionsArray, setQuestionsArray] = useState([])
  const [endGame, setEndGame] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
      const data = await res.json()
      const results = data.results

      let randomIndex = Math.floor(Math.random() * 4)
      
      const questionItems = results.map((question, index) => {
        question.incorrect_answers.splice(randomIndex, 0, question.correct_answer)

        return {
          question: question.question,
          answers: question.incorrect_answers.map(obj => {
            return {
              text: obj,
              id: nanoid(),
              isLogged: false,
              isCorrectAnswer: false,
              isWrongAnswer: false,
            }
          }),
          correct: question.correct_answer,
          id: index
        }
      })
      setQuestionsArray(questionItems)
    }
    getQuestions()
  },[render])
  
  function hideOverlay() {
    setRender(false)
  }

  function logAnswer(id, index) {
    // Working on here
    setQuestionsArray(prevQuestions => prevQuestions.map(question => {
      return index === question.id ? {
          ...question,
          answers: questionsArray[index].answers.map(item => {
            if(id === item.id) {
              return {
                ...item,
                isLogged: true
              }
            } else {
              return {
                ...item,
                isLogged: false
              }
            }
          }),
      } : question
    }))
  }

  function checkAnswers() {
    // Logic is right, but still a way need to be found to change the background color accordingly
    if(!endGame) {
      setEndGame(true)
      for(let question of questionsArray) {
        for(let answer of question.answers) {
          if(answer.text === question.correct && answer.isLogged) {
            answer.isCorrectAnswer = true
            setCount(prevCount => prevCount + 1)
          } else if(answer.text != question.correct) {
            answer.isWrongAnswer = true
          } else {
            answer.isLogged = true
          }
        }
      }
    } else {
      setEndGame(false)
      setRender(true)
      setQuestionsArray([])
      setCount(0)
    }
  }

  const questionHtml = questionsArray.map(element => {
    return (
      <Question 
        key={nanoid()}
        index={element.id}
        question={element.question}
        answers={element.answers.map(item => {
          return (
            <Answer 
              key={item.id}
              id={item.id}
              index={element.id}
              isLogged={item.isLogged}
              isCorrect={item.isCorrectAnswer}
              isWrong={item.isWrongAnswer}
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
        {endGame && <h2 className='summary'>You scored {count}/10 answers right!</h2>}
        <button onClick={checkAnswers}>{endGame ? "Play again" : "Check answers"}</button>
      </section>}
      <img className="absolute__img left" src={blobLeft}/>
      <img className="absolute__img right" src={blobRight}/>
    </main>
  )
}

export default App