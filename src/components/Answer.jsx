export default function Answer(props) {
    return (
        <div 
            className="answer" 
            onClick={() => props.handleClick(props.id, props.index)}
            style={{backgroundColor: props.isLogged ? "#D6DBF5" : "#F5F7FB"}}
        >
            {props.text}
        </div>
    )
}