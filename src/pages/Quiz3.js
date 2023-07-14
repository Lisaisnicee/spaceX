import React, { useState } from 'react';
import QuizScreen from '../component/QuizScreen';
import JoinScreen from '../component/JoinScreen';
import questionList3 from '../data/questionList3.json';

const Quiz3 = () => {
  const [quizStart, setQuizStarted] = useState(false);

  return (
    <div className="qcontainer">
      <QuizScreen questionList={questionList3} />)
    </div>
  );
};

export default Quiz3;
