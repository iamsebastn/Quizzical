import he from 'he'

export default function Question(props) {
    return (
            <div className="question" key={props.id}>
                <h2 className="t_h2">{he.decode(props.question)}</h2>
                <div className="answer__wrapper">
                {props.answers}
                </div>
            </div>
    )
}