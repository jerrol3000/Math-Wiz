import React from 'react'

function Answers({options}) {
  return (
    <div>
      {options.map(option =>
        <button key= {option} type='button'>{ option }</button>)}
    </div>
  )
}

export default Answers
