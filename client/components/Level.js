import React from 'react'
import {useSelector} from 'react-redux'

const Level = () => {
  const level = useSelector((state) => state.game.level)

  return (
    <div className="level-container">
      <span>Level:</span>
      <span>{level}</span>
    </div>
  )
}

export default Level
