import React, { useState } from 'react';
import QuizScreen from '../component/QuizScreen';
import JoinScreen from '../component/JoinScreen';
import questionList2 from '../data/questionList2.json';

const Quiz2 = () => {
  const [quizStart, setQuizStarted] = useState(false);

  return (
    <div className="qcontainer">
      <QuizScreen questionList={questionList2} />)
    </div>
  );
};

export default Quiz2;
