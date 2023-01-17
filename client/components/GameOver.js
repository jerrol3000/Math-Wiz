import React from 'react'
import {useSelector} from 'react-redux'

const GameOver = () => {
  const score = useSelector((state) => state.game.score)

  return (
    <div className="game-over-container">
      <h2>Game Over</h2>
      <p>Your final score is: {score}</p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  )
}

export default GameOver
