import React, { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import '../styles/css/quizz.css';

const Question = ({ question, totalQuestions, currentQuestionIndex, setAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswerScreen, setShowAnswerScreen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const timer = useRef(null);
  const progressBar = useRef(null);

  useEffect(() => {
    progressBar.current.classList.remove('active');
    setTimeout(() => {
      progressBar.current.classList.add('active');
    }, 0);
    timer.current = setTimeout(goToNextQuestion, 10 * 1000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [question]);

  const goToNextQuestion = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
    setShowAnswerScreen(false);
  };

  const checkAnswer = (indexSelected) => {
   
    const isOptionCorrect = indexSelected == question.correctOptionIndex;
    if(isOptionCorrect == true) {
      setIsCorrect(isOptionCorrect, true);
    }
else { 
  setIsCorrect(isOptionCorrect, false);
}
  };

  const handleOptionClick = (optionIndex) => {
    
    setSelectedOption(optionIndex);
    setShowAnswerScreen(true);
    checkAnswer(optionIndex);
  };

  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b>{currentQuestionIndex}</b> of <b>{totalQuestions}</b>
        <div className="main">
          <div className="title">
            <span>Question: </span>
          </div>
          <p>{question.title}</p>
        </div>
        <div className="options">
          {question.options.map((option, index) => (
            <div
              className={`option ${selectedOption === index ? 'active' : ''}`}
              key={index}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
      <div className="control">
        {showAnswerScreen ? (
          <button onClick={goToNextQuestion}>Next</button>
        ) : (
          <button disabled>Select an option</button>
        )}
      </div>
      {showAnswerScreen && (
        <AnswerScreen isCorrect={isCorrect} correctOptionIndex={question.correctOptionIndex} />
      )}
    </div>
  );
};

const AnswerScreen = ({ isCorrect, correctOptionIndex }) => {
 
  return (
    <div className="answer-screen">

      {isCorrect ? 'Correct!' : 'Wrong!'}
      <div className="correct-answer">
        Correct answer: <span>{correctOptionIndex+1}</span>
      </div>
    </div>
  );
};

export default Question;
