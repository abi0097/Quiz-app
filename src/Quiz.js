// // Quiz.js
// import React, { useState, useEffect } from 'react';

// const Quiz = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(15); // Timer in seconds
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showResult, setShowResult] = useState(false);

//   useEffect(() => {
//     fetchQuizData();
//   }, []);

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       if (timer > 0) {
//         setTimer(timer - 1);
//       } else {
//         handleAnswerSubmit(); // Auto-submit when timer expires
//       }
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, [timer]);

//   const fetchQuizData = async () => {
//     try {
//       const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
//       const data = await response.json();
//       setQuestions(data.results);
//     } catch (error) {
//       console.error('Error fetching quiz data', error);
//     }
//   };

//   const handleCheckboxChange = (event, answer) => {
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       setSelectedAnswer(answer);
//     } else {
//       setSelectedAnswer(null);
//     }
//   };

//   const handleAnswerSubmit = () => {
//     const currentQuestion = questions[currentQuestionIndex];

//     if (selectedAnswer === currentQuestion.correct_answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedAnswer(null); // Reset selected answer for the next question
//       setTimer(15); // Reset timer for the next question
//     } else {
//       // Quiz is complete
//       setShowResult(true);
//     }
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   const isSubmitDisabled = selectedAnswer === null; // Disable the Submit button if no answer is selected

//   return (
//     <div>
//       {currentQuestion && !showResult ? (
//         <div>
//           <h2>Question {currentQuestionIndex + 1}</h2>
//           <p>Category: {currentQuestion.category}</p>
//           <p>Difficulty: {currentQuestion.difficulty}</p>
//           <p>{currentQuestion.question}</p>

//           <ul>
//             {currentQuestion.incorrect_answers.map((answer, index) => (
//               <li key={index}>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value={answer}
//                     checked={selectedAnswer === answer}
//                     onChange={(event) => handleCheckboxChange(event, answer)}
//                   />
//                   {answer}
//                 </label>
//               </li>
//             ))}
//           </ul>

//           <button onClick={handleAnswerSubmit} disabled={isSubmitDisabled}>
//             Submit
//           </button>
//           <p>Time Left: {timer} seconds</p>
//         </div>
//       ) : showResult ? (
//         <div>
//           <h2>Quiz Results</h2>
//           <p>Your score: {score}/{questions.length}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Quiz;




// // Quiz.js
// import React, { useState, useEffect } from 'react';

// const Quiz = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(15); // Timer in seconds
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   useEffect(() => {
//     fetchQuizData();
//   }, []);

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       if (timer > 0) {
//         setTimer(timer - 1);
//       } else {
//         handleAnswerSubmit(); // Auto-submit when timer expires
//       }
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, [timer]);

//   const fetchQuizData = async () => {
//     try {
//       const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
//       const data = await response.json();
//       setQuestions(data.results);
//     } catch (error) {
//       console.error('Error fetching quiz data', error);
//     }
//   };

//   const handleRadioChange = (event) => {
//     setSelectedAnswer(event.target.value);
//   };

//   const handleAnswerSubmit = () => {
//     const currentQuestion = questions[currentQuestionIndex];

//     if (selectedAnswer === currentQuestion.correct_answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedAnswer(null); // Reset selected answer for the next question
//       setTimer(15); // Reset timer for the next question
//     } else {
//       // Quiz is complete
//       alert(`Quiz completed! Your score: ${score}/${questions.length}`);
//     }
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   const isSubmitDisabled = selectedAnswer === null; // Disable the Submit button if no answer is selected

//   return (
//     <div>
//       {currentQuestion ? (
//         <div>
//           <h2>Question {currentQuestionIndex + 1}</h2>
//           <p>Category: {currentQuestion.category}</p>
//           <p>Difficulty: {currentQuestion.difficulty}</p>
//           <p>{currentQuestion.question}</p>

//           <ul>
//             {currentQuestion.incorrect_answers.map((answer, index) => (
//               <li key={index}>
//                 <label>
//                   <input
//                     type="radio"
//                     name="answer"
//                     value={answer}
//                     checked={selectedAnswer === answer}
//                     onChange={handleRadioChange}
//                   />
//                   {answer}
//                 </label>
//               </li>
//             ))}
//           </ul>

//           <button onClick={handleAnswerSubmit} disabled={isSubmitDisabled}>
//             Submit
//           </button>
//           <p>Time Left: {timer} seconds</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Quiz;




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
