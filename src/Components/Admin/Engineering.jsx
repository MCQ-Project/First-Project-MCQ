import React, { useEffect, useState } from "react";
import axios from "axios";

const License = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("http://localhost:3756/quiz/display");
        console.log(response.data); // Debugging line
        setQuizData(response.data.questionArray || []); // Use fallback
      } catch (error) {
        setError("Error fetching quiz data");
        console.error("Error fetching quiz data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-10/12 m-auto mt-10 text-black mt-36">
      <h1 className="text-2xl font-bold mb-5">License Quiz Data</h1>
      {quizData.length === 0 ? (
        <div>No quizzes available</div>
      ) : (
        quizData.map((quiz, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <h2 className="font-semibold text-lg">{quiz.title}</h2>
            <p>{quiz.questions}</p>
            <h3 className="font-semibold mt-2">Options:</h3>
            <ul className="list-disc pl-5">
              {quiz.options.map((option, idx) => (
                <li key={idx} className={option.isCorrect ? "text-green-600" : "text-red-600"}>
                  {option.option} {option.isCorrect && "(Correct)"}
                </li>
              ))}
            </ul>
            <p className="mt-2"><strong>Correct Answer:</strong> {quiz.correctAnswer}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default License;
 