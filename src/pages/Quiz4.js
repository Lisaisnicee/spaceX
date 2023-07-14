import React, { useState } from 'react';
import QuizScreen from '../component/QuizScreen';
import JoinScreen from '../component/JoinScreen';
import questionList4 from '../data/questionList4.json';

const Quiz4 = () => {
  const [quizStart, setQuizStarted] = useState(false);

  return (
    <div className="qcontainer">
   
        <QuizScreen questionList={questionList4} /> 
    
      
      )
    </div>
  );
};

export default Quiz4;
