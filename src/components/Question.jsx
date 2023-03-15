import { useState } from "react";

export default function Question() {
    const [answer, setAnswer] = useState(false)
    const bgStyle = {backgroundColor: answer ? "#D6DBF5" : "#F5F7FB"}

    function lockAnswer() {
        setAnswer(!answer)
    }

    return (
        <section className="question--wrapper">
            <div className="question">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla, sapiente iure vel fugit quisquam cum harum iusto cumque</h2>
                <div className="answer__wrapper">
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 1</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 2</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 3</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 4</div>
                </div>
            </div>
            <div className="question">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla, sapiente iure vel fugit quisquam cum harum iusto cumque</h2>
                <div className="answer__wrapper">
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 1</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 2</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 3</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 4</div>
                </div>
            </div>
            <div className="question">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla, sapiente iure vel fugit quisquam cum harum iusto cumque</h2>
                <div className="answer__wrapper">
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 1</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 2</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 3</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 4</div>
                </div>
            </div>
            <div className="question">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla, sapiente iure vel fugit quisquam cum harum iusto cumque</h2>
                <div className="answer__wrapper">
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 1</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 2</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 3</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 4</div>
                </div>
            </div>
            <div className="question">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla, sapiente iure vel fugit quisquam cum harum iusto cumque</h2>
                <div className="answer__wrapper">
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 1</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 2</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 3</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 4</div>
                </div>
            </div>
            <div className="question">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla, sapiente iure vel fugit quisquam cum harum iusto cumque</h2>
                <div className="answer__wrapper">
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 1</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 2</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 3</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 4</div>
                </div>
            </div>
            <div className="question">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla, sapiente iure vel fugit quisquam cum harum iusto cumque</h2>
                <div className="answer__wrapper">
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 1</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 2</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 3</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 4</div>
                </div>
            </div>
            <div className="question">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla, sapiente iure vel fugit quisquam cum harum iusto cumque</h2>
                <div className="answer__wrapper">
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 1</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 2</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 3</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 4</div>
                </div>
            </div>
            <div className="question">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla, sapiente iure vel fugit quisquam cum harum iusto cumque</h2>
                <div className="answer__wrapper">
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 1</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 2</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 3</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 4</div>
                </div>
            </div>
            <div className="question">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla, sapiente iure vel fugit quisquam cum harum iusto cumque</h2>
                <div className="answer__wrapper">
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 1</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 2</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 3</div>
                    <div onClick={lockAnswer} className="answer" style={bgStyle}>Answer 4</div>
                </div>
            </div>
        </section>
    )
}