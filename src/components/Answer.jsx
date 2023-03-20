export default function Answer(props) {
    return (
        <div 
            className="answer" 
            id={props.id}
            onClick={props.handleClick}
            style={{backgroundColor: props.isLogged ? "#D6DBF5" : "#F5F7FB"}}
        >
            {props.text}
        </div>
    )
}