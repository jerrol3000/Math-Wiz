import React, {useState} from 'react'
import {useSelector} from 'react-redux'

// import Answers from './Answers'

// function Question() {
//   const [level, setLevel] = useState(1)
//   const [question, setQuestion] = useState()

//   let answer
//   const generateBasicQuestion = (multiplier = 5) => {
//     const operations = ['+', '-', '*', '/']
//     const operation = operations[Math.floor(Math.random() * operations.length)]
//     const num1 = Math.floor(Math.random() * multiplier)
//     const num2 = Math.floor(Math.random() * multiplier)
//     answer = eval(`${num1} ${operation} ${num2}`)
//     return `${num1} ${operation} ${num2}`
//   }

//   const generateAnswers = (correctAnswer) => {
//     const options = [correctAnswer]
//     while (options.length < 4) {
//       const incorrectAnswer = correctAnswer + Math.floor(Math.random() * 5) - 1
//       if (
//         !options.includes(incorrectAnswer) &&
//         incorrectAnswer !== correctAnswer
//       ) {
//         options.push(incorrectAnswer)
//       }
//     }
//     // Shuffle the options
//     for (let i = options.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1))
//       ;[options[i], options[j]] = [options[j], options[i]]
//     }
//     return options
//   }
//   const queston = generateBasicQuestion()
//   const options = generateAnswers(answer)

//   return (
//     <>
//       <h4>Select the correct answer</h4>
//       <h2>{queston} ?</h2>
//       <Answers options={options} answer={answer} question={question} />
//     </>
//   )
// }

const Question = ({
  level,
  handleCorrectAnswer,
  handleIncorrectAnswer,
  multiplier,
}) => {
  const [animation, setAnimation] = useState('')

  const {useTimer, timeLeft} = useSelector((state) => state.game)

  const generateQuestion = () => {
    const operations = ['+', '-', '*', '/']
    const operation = operations[Math.floor(Math.random() * operations.length)]
    const num1 = Math.floor(Math.random() * multiplier)
    const num2 = Math.floor(Math.random() * multiplier)
    let answer = 0
    switch (operation) {
      case '+':
        answer = num1 + num2
        break
      case '-':
        answer = num1 - num2
        break
      case '*':
        answer = num1 * num2
        break
      case '/':
        answer = num1 / num2
        answer = Math.round(answer)
        break
      default:
        break
    }
    return {text: `${num1} ${operation} ${num2}`, answer}
  }
  console.log('generateQuestion(', generateQuestion())

  const [question, setQuestion] = useState(generateQuestion())

  const generateOptions = (answer) => {
    let options = [answer]
    while (options.length < 4) {
      let randomOption = Math.floor(Math.random() * (level * 2))
      if (randomOption !== answer && !options.includes(randomOption)) {
        options.push(randomOption)
      }
    }
    // shuffle the options
    for (let i = options.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return options
  }
  const [options, setOptions] = useState(generateOptions(question.answer))

  const handleAnswer = (userAnswer) => {
    if (userAnswer === question.answer) {
      setAnimation('correct')
      handleCorrectAnswer()
    } else {
      setAnimation('incorrect')
      handleIncorrectAnswer()
    }
    if (!useTimer) {
      setQuestion(generateQuestion())
      setOptions(generateOptions(question.answer))
    }
    setTimeout(() => {
      setAnimation('')
    }, 1000)
  }

  return (
    <div className={`question-container ${animation}`}>
      <h2>{question.text}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      {useTimer && <div className="timer">Time left: {timeLeft}</div>}
    </div>
  )
}

// export default MathQuestion

export default Question
