import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)
  return (
    <div
      clsasName={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      {flip ? flashcard.answer : flashcard.question}
    </div>
  )
}
