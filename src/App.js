import React, { useEffect, useState } from 'react'
import './App.css'
import FlashcardList from './components/FlashcardList'
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
      res.data.results.map((questionItem, index) => {
        return {
          id: `${index}-${Date.now()}`,
          questions: questionItem.question,
          answer: questionItem.correct_answer,
        }
      })
      console.log(res.data)
    })
  }, [])

  return <FlashcardList flashcards={flashcards} />
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What are hashmaps/Map Objects in Javascript?',
    answer: 'Answer',
  },
  {
    id: 2,
    question: 'What tools do you use for version control?',
    answer: 'Answer',
  },
  {
    id: 3,
    question: 'What is a REST API?',
    answer: 'Answer',
  },
  {
    id: 4,
    question: 'In a relational database, how can you connect 2 objects/tables?',
    answer: 'Answer',
  },
  {
    id: 5,
    question: 'What is a terminal server?',
    answer: 'Answer',
  },
  {
    id: 6,
    question: 'How do you communicate with a database in React?',
    answer: 'Answer',
  },
  {
    id: 7,
    question: 'How do you make sure your app is up and running 24/7?',
    answer: 'Answer',
  },
  {
    id: 8,
    question: 'What is DOM and Virtual DOM in React?',
    answer: 'Answer',
  },
  {
    id: 9,
    question: 'What is an interface in Typescript?',
    answer: 'Answer',
  },
  {
    id: 10,
    question:
      'What is the difference between arrow functions and regular functions?',
    answer: 'Answer',
  },
  {
    id: 11,
    question: 'What is JSX?',
    answer: 'Answer',
  },
  {
    id: 12,
    question:
      'What is the difference between named exports and default exports?',
    answer: 'Answer',
  },
  {
    id: 13,
    question:
      'What is the difference between functional components and class based components?',
    answer: 'Answer',
  },
  {
    id: 14,
    question: 'What is a pure component?',
    answer: 'Answer',
  },
]

export default App
