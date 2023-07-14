import { joinPaths } from '@remix-run/router';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchC from '../component/searchC';
import '../styles/css/quizz.css';

const QuizResult = ({ result, retry }) => {
  let scoreMessage = '';
  if (result.percentage > 80) {
    scoreMessage = "Wow, Elon Musk would be proud of you!";
  } else if (result.percentage > 60) {
    scoreMessage = "So close but you could do so much better!";
  } else {
    scoreMessage = "Try again, it's not too late!";
  }

  return (
    <div className="result-screen">
      <h2>Score: {result.percentage}%</h2>
      <p>{scoreMessage}</p>
      {/* <button onClick={retry}>RETRY</button> */}
      {/* should add a button to return to the quiz page.. */}
    </div>
  );
};


export default QuizResult;
