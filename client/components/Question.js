import React, {useState} from 'react'
import Answers from './Answers'

function Question() {
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
      const incorrectAnswer = correctAnswer + Math.floor(Math.random() * 5) - 1
      if (
        !options.includes(incorrectAnswer) &&
        incorrectAnswer !== correctAnswer
      ) {
        options.push(incorrectAnswer)
      }
    }
    // Shuffle the options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return options
  }
  const queston = generateBasicQuestion()
  const options = generateAnswers(answer)

  return (
    <>
    <h4>Select the correct answer</h4>
    <h2>{queston} ?</h2>
      <Answers options={options}/>
    </>
    )
}

export default Question