import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20); 

  useEffect(() => {
    fetchQuizData();
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        handleAnswerSubmit(null); 
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  const fetchQuizData = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error('Error fetching quiz data', error);
    }
  };

  const handleAnswerSubmit = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(15); 
    } else {
      
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {currentQuestion ? (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>Category: {currentQuestion.category}</p>
          <p>Difficulty: {currentQuestion.difficulty}</p>
          <p>{currentQuestion.question}</p>

          <ul>
            {currentQuestion.incorrect_answers.map((answer, index) => (
              <li key={index}>
                <button  onClick={() => handleAnswerSubmit(answer)}>{answer}</button>
              </li>
            ))}
            <li>
              <button   onClick={() => handleAnswerSubmit(currentQuestion.correct_answer)}>
                {currentQuestion.correct_answer}
              </button>
            </li>
          </ul>

          <p>Time Left: {timer} seconds</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;
