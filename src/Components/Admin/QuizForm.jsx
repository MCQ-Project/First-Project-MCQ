import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postQuizObj, quizSuccess } from "../../Redux/action.js";

export const QuizForm = () => {
  const dispatch = useDispatch();

  const [quizTitle, setQuizTitle] = useState("Engineering"); // Default to Engineering
  const [questionArray, setQuestionArray] = useState([
    {
      title: "",
      questions: "",
      options: [
        { option: "", isCorrect: false, id: 1 },
        { option: "", isCorrect: false, id: 2 },
        { option: "", isCorrect: false, id: 3 },
        { option: "", isCorrect: false, id: 4 },
      ],
      correctAnswer: "",
    },
  ]);
  const [submitted, setSubmitted] = useState(false); // Track submission state

  const handleAddQuestion = () => {
    setQuestionArray((prev) => [
      ...prev,
      {
        title: "",
        questions: "",
        options: [
          { option: "", isCorrect: false, id: 1 },
          { option: "", isCorrect: false, id: 2 },
          { option: "", isCorrect: false, id: 3 },
          { option: "", isCorrect: false, id: 4 },
        ],
        correctAnswer: "",
      },
    ]);
  };

  const handleQuizSubmit = async (event) => {
    event.preventDefault();
    const quizData = {
      title: quizTitle,
      questionArray,
    };

    try {
      await axios.post("http://localhost:3756/quiz/add", quizData);
      alert("Quiz added successfully!");
      setSubmitted(true); // Set submitted to true
    } catch (error) {
      console.error("Error adding quiz:", error);
    }
  };

  const handleQuestionChange = (index, field) => (event) => {
    const value = event.target.value;
    setQuestionArray((prev) =>
      prev.map((question, i) =>
        i === index ? { ...question, [field]: value } : question
      )
    );
  };

  const handleOptionChange = (questionIndex, optionIndex) => (event) => {
    const { name, value } = event.target;
    setQuestionArray((prev) =>
      prev.map((question, i) =>
        i === questionIndex
          ? {
              ...question,
              options: question.options.map((option, j) =>
                j === optionIndex
                  ? { ...option, [name]: name === "isCorrect" ? value === "true" : value }
                  : option
              ),
            }
          : question
      )
    );
  };

  return (
    <div className="w-10/12 flex text-black mt-36">
      <div className="w-1/2 mt-24 ml-32">
        <img className="h-80 pl-36 mt-8" src="./feedback.gif" alt="feedback" />
      </div>

      <div>
        <div className="flex text-black w-96 font-bold font-serif mb-2 ml-12 mt-14">
          <h1 className="text-2xl">ADD QUESTIONS</h1>
          <img src="./add.gif" alt="add icon" className="w-1/3 h-20 -mt-6" />
        </div>
        {!submitted ? (
          <form className="-mt-6" onSubmit={handleQuizSubmit}>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-black">
                Quiz Title
              </label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    value="Engineering"
                    checked={quizTitle === "Engineering"}
                    onChange={() => setQuizTitle("Engineering")}
                  />
                  Engineering
                </label>
                <label>
                  <input
                    type="radio"
                    value="License"
                    checked={quizTitle === "License"}
                    onChange={() => setQuizTitle("License")}
                  />
                  License
                </label>
              </div>
            </div>
            {questionArray.map((question, qIndex) => (
              <div key={qIndex} className="mb-6">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-black">
                  Question Title
                </label>
                <input
                  className="block w-full bg-gray-200 text-black border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Question Title"
                  value={question.title}
                  onChange={handleQuestionChange(qIndex, "title")}
                />
                <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-black">
                  Question
                </label>
                <input
                  className="block w-full bg-gray-200 text-black border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Question"
                  value={question.questions}
                  onChange={handleQuestionChange(qIndex, "questions")}
                />
                <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-black">
                  Options
                </label>
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="flex gap-1 mb-3">
                    <input
                      className="w-1/2 block bg-gray-200 text-black border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder={`Option ${oIndex + 1}`}
                      name="option"
                      value={option.option}
                      onChange={handleOptionChange(qIndex, oIndex)}
                    />
                    <select
                      className="form-select block w-1/2 px-3 h-9 text-base font-normal text-black bg-white border border-solid border-gray-300 rounded transition ease-in-out focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="isCorrect"
                      value={option.isCorrect ? "true" : "false"}
                      onChange={handleOptionChange(qIndex, oIndex)}
                    >
                      <option value="">Select Correct Option</option>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                ))}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddQuestion}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4"
            >
              Add Another Question
            </button>
            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Submit Quiz
            </button>
          </form>
        ) : (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Submitted Quiz:</h2>
            <h3 className="font-bold">Title: {quizTitle}</h3>
            {questionArray.map((question, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold">{`Question ${index + 1}: ${question.questions}`}</h4>
                {question.options.map((option, oIndex) => (
                  <div key={oIndex}>
                    <p>{`${option.option} - ${option.isCorrect ? "Correct" : "Incorrect"}`}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
