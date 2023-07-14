import { joinPaths } from '@remix-run/router';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchC from '../component/searchC';
import '../styles/css/quizz.css';

const JoinScreen = ({start}) => {
  return (
    <>
      <div className="quizz-container">
        <h1>READY TO TAKE THE QUIZZ ?</h1>
       <div> <Link to="/quiz">
          <button onClick={start}>START</button>
        </Link></div>
      </div>
    </>
  );
};

export default JoinScreen;
