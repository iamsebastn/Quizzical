import { useState } from "react";

export default function Question(props) {
    // const bgStyle = {backgroundColor: answer ? "#D6DBF5" : "#F5F7FB"}

    return (
            <div className="question">
                <h2 className="t_h2">{props.question}</h2>
                <div className="answer__wrapper">
                    <div 
                        onClick={console.log("I'm a button")} 
                        className="answer" 
                        // style={bgStyle}
                        >
                        {props.correctAnswer}
                    </div>
                    <div 
                        onClick={console.log("I'm a button")} 
                        className="answer" 
                        // style={bgStyle}
                        >
                        {props.wrongAnswer[0]}
                    </div>
                    <div 
                        onClick={console.log("I'm a button")} 
                        className="answer" 
                        // style={bgStyle}
                        >
                        {props.wrongAnswer[1]}
                    </div>
                    <div 
                        onClick={console.log("I'm a button")} 
                        className="answer" 
                        // style={bgStyle}
                        >
                        {props.wrongAnswer[2]}
                    </div>
                </div>
            </div>
    )
}