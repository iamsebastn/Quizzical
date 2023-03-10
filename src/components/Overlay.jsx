import blobLeft from "../assets/blob-left.png"
import blobRight from "../assets/blob-right.png"

function Overlay(props) {
    return (
        <>
            <div className="overlay">
                <div className="intro">
                    <h1 className="t_h1">Quizzical</h1>
                    <p className="t_p">It's your time to shine! Challenge your friends and see who gets the best score!</p>
                </div>
                <button 
                    className="start-btn"
                    onClick= {props.render}
                >
                    Start Quiz
                </button>
                <img className="left" src={blobLeft}/>
                <img className="right" src={blobRight}/>
            </div>
        </>
    )
}

export default Overlay