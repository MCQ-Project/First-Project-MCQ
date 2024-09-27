import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EntranceTest = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("http://localhost:3756/quiz/display");
        setQuizzes(response.data);
      } catch (err) {
        console.error("Error fetching quizzes:", err);
        setError("Failed to fetch quizzes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  const handleAnswerSelect = (answer) => {
    if (!selectedAnswers[currentQuestionIndex]) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: answer,
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleFinishQuiz = () => {
    setShowResults(true);
  };

  const handleDashboardRedirect = () => {
    navigate("/dashboard");
  };

  if (loading) {
    return <div>Loading quizzes...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const currentQuiz = quizzes[currentQuestionIndex];
  const correctAnswer = currentQuiz.answers.find(ans => ans.correct)?.text;

  return (
    <div className="entrance-test p-6 bg-white shadow-lg rounded mt-36">
      {showResults ? (
        <div>
          <h2 className="text-2xl font-semibold">Results</h2>
          <ul className="mt-4">
            {quizzes.map((quiz, index) => {
              const isCorrect = selectedAnswers[index] === quiz.answers.find(ans => ans.correct)?.text;
              return (
                <li key={index} className={`flex justify-between items-center p-2 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                  <span>{index + 1}. {quiz.question}</span>
                  <span>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                </li>
              );
            })}
          </ul>
          <button onClick={handleDashboardRedirect} className="mt-4 bg-blue-500 text-white p-2 rounded">Go to Dashboard</button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold">{currentQuestionIndex + 1}. {currentQuiz.question}</h2>
          <div className="answers mt-4">
            {currentQuiz.answers.map((answer, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === answer.text;
              const isCorrect = answer.correct;
              const buttonClass = isSelected 
                ? (isCorrect ? 'bg-green-300' : 'bg-red-300') 
                : 'bg-gray-200';
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(answer.text)}
                  className={`w-full text-left p-2 rounded mt-2 ${buttonClass}`}
                  disabled={!!selectedAnswers[currentQuestionIndex]} // Disable if already answered
                >
                  {answer.text}
                </button>
              );
            })}
            {selectedAnswers[currentQuestionIndex] && (
              <div className="mt-2">
                <span className="font-bold">Correct answer: </span>
                <span>{correctAnswer}</span>
                <div className="mt-2">
                  <span className="font-bold">Explanation: </span>
                  <span>{currentQuiz.explanation}</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between mt-4">
            {currentQuestionIndex === quizzes.length - 1 ? (
              <button onClick={handleFinishQuiz} className="bg-blue-500 text-white p-2 rounded">Finish Quiz</button>
            ) : (
              <button onClick={handleNextQuestion} className="bg-blue-500 text-white p-2 rounded">Next</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EntranceTest;
