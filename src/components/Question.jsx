export default function Question(props) {

    // const answersElements = props.answers.map((element) => {
    //     return (
    //         <div 
    //             key={element.id}
    //             className="answer" 
    //             onClick={() => {
    //                 props.logAnswer(element.id)
    //             }}
    //             style={{backgroundColor: element.isLogged ? "#D6DBF5" : "#F5F7FB"}}
    //         >
    //             {element.text}
    //         </div>
    //     )
    // })

    return (
            <div className="question">
                <h2 className="t_h2">{props.question}</h2>
                <div className="answer__wrapper">
                {props.answers}
                </div>
            </div>
    )
}