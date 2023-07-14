import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/css/quizz.css';

const JoinScreen = ({ start }) => {
  return (
    <>
      <div className="quizz-container">
        <h1>READY TO TAKE SOME QUIZZES?</h1>
        <div>
          <Link to="/quiz/1">
            <button onClick={start}>Space Quiz</button>
          </Link>
        </div>
        <div>
          <Link to="/quiz/2">
            <button onClick={start}>Movies in space Quizz </button>
          </Link>
        </div>
        <div>
          <Link to="/quiz/3">
            <button onClick={start}> Historical space facts  Quizz</button>
          </Link>
        </div>
        <div>
          <Link to="/quiz/4">
            <button onClick={start}>Fun space facts Quizz</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JoinScreen;
