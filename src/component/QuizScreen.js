import React, { useState } from 'react';
import QuestionList from "../data/questionList.json";
import '../styles/css/quizz.css';
import Question from "../component/Question.js"
import QuizResult from "../component/QuizResult.js"

const QuizScreen = ({ retry }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length).fill(null));
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;

  function calculateResult() {
    let correct = 0;
    QuestionList.map((question, index) => {
      console.log("came here");
      console.log("question.correctOptionIndex" + question.correctOptionIndex);
      console.log("markedAnswers[index]" + markedAnswers[index]);
      if (question.correctOptionIndex == markedAnswers[index]) {
       
        correct++;
           }
    });
    console.log("whats correct?" + correct);
    return {
      total: QuestionList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100)
    };
  }

  function goToNextQuestion(index) {
    setMarkedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = index;
      console.log("newAnswers", newAnswers); 
      return newAnswers;
    });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }
  
 
  return (
    <>
      <div className="quiz-screen">
        {isQuestionEnd ? (
         <QuizResult result={calculateResult()} retry={retry} />

        ) : (
          <Question
            question={QuestionList[currentQuestionIndex]}
            totalQuestions={QuestionList.length}
            currentQuestionIndex={currentQuestionIndex + 1}
            setAnswer={goToNextQuestion}
          />
          
        )
        }
        
      </div>
      
    </>

    
  );
};

export default QuizScreen;
