export default function Question(props) {
    const bgStyle = {
        backgroundColor: props.isLogged ? "#D6DBF5" : "#F5F7FB"
    }

    const answers = props.answers.map((element) => {
        return (
            <div 
                key={element.id}
                className="answer" 
                onClick={() => props.logAnswer(element.id)}
                style={bgStyle}
            >
                {element.text}
            </div>
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