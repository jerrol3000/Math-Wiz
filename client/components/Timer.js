import React from 'react'
import {useSelector} from 'react-redux'

const Timer = () => {
  const timeLeft = useSelector((state) => state.game.timeLeft)

  return (
    <div className="timer-container">
      <span>Time Left:</span>
      <span>{timeLeft}</span>
    </div>
  )
}

export default Timer
