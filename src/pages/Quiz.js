import React, { useState } from 'react';
import QuizScreen from '../component/QuizScreen';
import JoinScreen from '../component/JoinScreen';


const Quiz = () => {
  
  const [quizStart, setQuizStarted] = useState(false);
  return (
    <div className ="qcontainer">
      { quizStart ? (
        <QuizScreen retry={() => setQuizStarted(false)}></QuizScreen>
      ) : (
        <JoinScreen start={()=> setQuizStarted(true)}> </JoinScreen>
      )
    
    }
    </div>
  )
  
};

export default Quiz;
