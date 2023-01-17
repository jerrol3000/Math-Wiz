import React, {useState} from 'react'

function Answers({options, answer}) {
  const [result, setResult] = useState('')
  const handleClick = (e) => {
    const value = Number(e.target.value)

    if (value !== answer) {
      setResult('Sorry, that is incorrect')
    } else {
      setResult('That is correct!')
    }
  }
  return (
    <div>
      {options.map((option) => (
        <button
          value={option}
          key={option}
          type="button"
          onClick={(e) => handleClick(e)}
        >
          {option}
        </button>
      ))}
      <h3>{result}</h3>
    </div>
  )
}

export default Answers
