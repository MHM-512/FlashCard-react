import React, { useState, useMemo } from 'react';
import { Box, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import FlashCard from './component/FlashCard/FlashCard'
import Header from './component/Header/Header';
import AnswerCart from './component/FlashCard/AnswerCart';
import { Question } from './component/types/flashcard';

export default function App() {

  const questions : Question[] = [
    {
      question: "What is React?",
      answer: "A JavaScript library",
    },
    {
      question: "What is JSX?",
      answer: "JavaScript XML",
    },
    {
      question: "What is state?",
      answer: "Data that can change",
    },
    {
      question: "What is a component?",
      answer: "A reusable UI element",
    },
    {
      question: "What is props?",
      answer: "Data passed to a component",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false);

  const totalQuestions = questions.length;
  const currentStep = currentQuestion + 1;
  const progressPercentage = Math.round((currentStep / totalQuestions) * 100);

  const hanelShowAnswer = () => {
    console.log('Show answer');
    setShowAnswer(true);
  }

  const handleNext = () => {

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setShowAnswer(false)
    }
  }

  const handleprevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);

    }
  }

  return (
    <div>
      <Box sx={{
        border: "none",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'

      }}>
        <Header
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          progressPercentage={progressPercentage}

        />
        <FlashCard
          questions={questions}
          currentQuestion={currentQuestion}
        />
        <Box sx={{
          width: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

        }}
        >
          <Button variant="text"
            sx={{
              color: grey[800],
              fontSize: '1.2rem',
              display: currentQuestion === 0 ? 'none' : 'inline-block'
            }}
            onClick={handleprevious}
            className='previousBtn'
          >
            previous
          </Button>
          <Button variant="text"
            sx={{
              color: grey[900],
              fontSize: '1.2rem',
            }}
            onClick={hanelShowAnswer}
          >
            show Answer
          </Button>
          <Button variant="text"
            sx={{
              color: grey[900],
              fontSize: '1.2rem',
            }}
            onClick={handleNext}
          >
            Next
          </Button>
        </Box >
        <AnswerCart
          showAnswer={showAnswer}
          answer={questions[currentQuestion].answer}
        />
      </Box>
    </div>
  )
}