import React from 'react'
import {useSelector} from 'react-redux'

const Lives = () => {
  const lives = useSelector((state) => state.game.lives)
  return (
    <div className="lives-container">
      <span>Lives:</span>
      {Array.from({length: lives}, (_, i) => (
        <span key={i} className="heart">
          ❤️
        </span>
      ))}
    </div>
  )
}

export default Lives
