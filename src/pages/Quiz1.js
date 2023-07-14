import React, { useState } from 'react';
import QuizScreen from '../component/QuizScreen';
import JoinScreen from '../component/JoinScreen';
import questionList1 from '../data/questionList1.json';

const Quiz1 = () => {
  const [quizStart, setQuizStarted] = useState(false);

  return (
    <div className="qcontainer">
   
        <QuizScreen questionList={questionList1} /> 
    
      
      )
    </div>
  );
};

export default Quiz1;
;
