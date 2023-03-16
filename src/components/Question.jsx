import { useState } from "react";
import { nanoid } from 'nanoid'

export default function Question(props) {
    const answersArray = [...props.wrongAnswers, props.correctAnswer]
    const answers = answersArray.map(element => {
        return (
            <div key={nanoid()} className="answer" onClick={props.handleClick}>{element}</div>
        )
    })

    return (
            <div className="question">
                <h2 className="t_h2">{props.question}</h2>
                <div className="answer__wrapper">
                {answers}
                </div>
            </div>
    )
}