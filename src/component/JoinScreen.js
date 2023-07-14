import React from 'react';
import { Link } from 'react-router-dom';
import SearchC from '../component/searchC';
import '../styles/css/quizz.css';

const JoinScreen = ({ start }) => {
  return (
    <>
      <div className="quizz-container">
        <h1>READY TO TAKE THE QUIZZ?</h1>
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
            <button onClick={start}>Fun Historical Space facts Quizz</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JoinScreen;
