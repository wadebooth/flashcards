import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)
  return (
    <div
      clsasName={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className='front'>
        {flashcard.question}
        <div className='flashcard-options'>
          {flashcard.options.map((option) => {
            return <div className='flashcard-option'>{option}</div>
          })}
        </div>
      </div>
      {flip ? flashcard.answer : flashcard.question}
    </div>
  )
}
