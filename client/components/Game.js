import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useInterval} from 'react-use'

import Question from './Question'
import GameOver from './GameOver'
import Timer from './Timer'
import Lives from './Lives'
import Level from './Level'

function Game() {
  const {
    level,
    lives,
    score,
    useTimer,
    timeLeft,
    gameOver,
    correctAnswers,
    multiplier,
  } = useSelector((state) => state.game)
  const dispatch = useDispatch()

  const handleCorrectAnswer = () => {
    dispatch(gameSlice.actions.setScore(score + 1))
    dispatch(gameSlice.actions.setCorrectAnswers(correctAnswers + 1))
    if (correctAnswers >= 2) {
      dispatch(gameSlice.actions.setLevel(level + 1))
    }
    if (useTimer) {
      dispatch(gameSlice.actions.setTimeLeft(5))
    }
  }

  const handleIncorrectAnswer = () => {
    dispatch(gameSlice.actions.setLives(lives - 1))
    if (lives === 1) {
      dispatch(gameSlice.actions.setGameOver(true))
    }
    if (useTimer) {
      dispatch(gameSlice.actions.setTimeLeft(5))
    }
  }

  useInterval(
    () => {
      if (timeLeft > 0) {
        dispatch(gameSlice.actions.setTimeLeft(timeLeft - 1))
      } else {
        handleIncorrectAnswer()
      }
    },
    useTimer ? 1000 : null
  )

  return (
    <div>
      {gameOver ? (
        <GameOver score={score} />
      ) : (
        <>
          <Level level={level} />
          <Lives lives={lives} />
          <Question
            level={level}
            handleCorrectAnswer={handleCorrectAnswer}
            handleIncorrectAnswer={handleIncorrectAnswer}
            multiplier={multiplier}
          />
          {useTimer && <Timer timeLeft={timeLeft} />}
        </>
      )}
    </div>
  )
}

export default Game
