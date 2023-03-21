export default function Answer(props) {
    const bgStyle = {
        backgroundColor:  
        props.isLogged && props.isCorrect ? "#94D7A2" :
        props.isLogged && props.isWrong ? "#E84B4B": 
        props.isLogged ? "#D6DBF5" :
        "#F5F7FB"
    }

    return (
        <div 
            className="answer"
            onClick={() => props.handleClick(props.id, props.index)}
            style={bgStyle}
        >
            {props.text}
        </div>
    )
}