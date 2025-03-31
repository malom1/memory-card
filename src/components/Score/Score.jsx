export default function Score({score, highScore}) {
    return(
        <div className="score">
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
    )
}