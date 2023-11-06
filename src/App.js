// App.js
import React, { useState } from 'react';
import './App.css';
import quizData from './quizData'


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const playAgain = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="app">
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {quizData.length}
            <button onClick={playAgain}>Try Again</button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>{currentQuestion + 1}</span>/{quizData.length}
              </div>
              <div className="question-text">{quizData[currentQuestion].question}</div>
            </div>
            <div className="answer-section">
              <div className="button-row">
                <div className="button-column">
                  {quizData[currentQuestion].options.slice(0, 2).map((option, index) => (
                    <button key={index} onClick={() => handleAnswerButtonClick(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                <div className="button-column">
                  {quizData[currentQuestion].options.slice(2, 4).map((option, index) => (
                    <button key={index + 2} onClick={() => handleAnswerButtonClick(option)}>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;