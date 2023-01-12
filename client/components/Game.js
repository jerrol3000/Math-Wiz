import React, {useState} from 'react'

function Game() {
  const [level, setLevel] = useState(1)

  let answer
  const generateBasicQuestion = (multiplier = 5) => {
    const operations = ['+', '-', '*', '/']
    const operation = operations[Math.floor(Math.random() * operations.length)]
    const num1 = Math.floor(Math.random() * multiplier)
    const num2 = Math.floor(Math.random() * multiplier)
    answer = eval(`${num1} ${operation} ${num2}`)
    return `${num1} ${operation} ${num2}`
  }
  const generateAnswers = correctAnswer => {
    const options = [correctAnswer]
    while (options.length < 4) {
      const incorrectAnswer = correctAnswer + Math.floor(Math.random() * 3) - 1
      if (!options.includes(correctAnswer)) {
        if (!options.includes(incorrectAnswer)) {
          options.push(incorrectAnswer)
        }
      }
    }
    // Shuffle the options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return options
  }

  return <div />
}

export default Game
