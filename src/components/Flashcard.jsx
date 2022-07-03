import React, { useState, useEffect, useRef } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')
  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    Math.max(frontHeight, backHeight, 100)
  }

  useEffect(() => {}, [flashcard.question, flashcard.answer])
  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className='front' ref={frontEl}>
        {flashcard.questions}
        {/* <div className='flashcard-options'>
          {flashcard.option.map((option) => {
            return <div className='flashcard-option'>{option}</div>
          })}
        </div> */}
      </div>
      <div className='back' ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  )
}
