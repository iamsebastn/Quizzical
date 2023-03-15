export default function Overlay(props) {
    return (
        <div className="overlay--wrapper">
            <div className="overlay--content">
                <h1 className="t_h1">Quizzical</h1>
                <p className="t_p">One of the most addictive quizgames on this planet. Answer as many questions as you know to win nothing except the honor in your clique</p>
                <button onClick={props.handleClick}>Start quiz</button>
            </div>
        </div>
    )
}