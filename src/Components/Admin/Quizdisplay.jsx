// Quizdisplay.jsx
import React from "react";

export const ShowQuiz = ({ quizQuestions, error }) => {
  return (
    <div className="mx-auto my-10 p-5 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Quiz Questions</h2>
      {error && <p className="text-red-500">{error}</p>}
      {quizQuestions.length === 0 ? (
        <p>No questions available.</p>
      ) : (
        quizQuestions.map((question, index) => (
          <div key={index} className="mb-4 p-3 border-b">
            <h3 className="font-semibold">{question.title}</h3>
            <p>{question.questions}</p>
            <h4 className="font-semibold">Options:</h4>
            <ul>
              {question.options.map((option, idx) => (
                <li key={idx} className="ml-4">{option.option}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};
