import { joinPaths } from '@remix-run/router';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchC from '../component/searchC';
import '../styles/css/quizz.css';

const QuizResult = (result,retry) => {
  return (
    <>
    <div className= "result-screen"> 
    <h2> 
        Result: { result.percentage}%
    </h2>
    <p>Selected {result.correct} correct options out of {result.total} questions.</p>
    <button onClick={retry}>RETRY</button>
    </div>
    
    
    
    
    
    
    </>
  );
};

export default QuizResult;
