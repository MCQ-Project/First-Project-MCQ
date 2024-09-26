import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import { postQuizResult, postUserResult } from "../../Redux/action.js";
import { Link } from "react-router-dom";
import axios from "axios";

export const Quiz = () => {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state?.mernQuize?.userId);
  const [questionArr, setQuestionArr] = useState([]);
  const [num, setNum] = useState(0);
  const [ans, setAns] = useState([]);
  const [btnshow, setBtnshow] = useState(false);
  const [disable, setDisable] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3756/quiz/display");
        setQuestionArr(response.data.questionArray || []);
      } catch (error) {
        setError("Error fetching quiz data");
        console.error("Error fetching quiz data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleQue = (index) => {
    setDisable(index);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-11/12 h-96 pt-5 mt-16 bg-white">
      <div className="w-full shadow-lg m-4 p-4 ml-12">
        <div className="flex justify-between align-middle">
          <div className="w-24 h-16">
            <iframe src="https://embed.lottiefiles.com/animation/103649" />
          </div>
          <div className="flex w-4/5 pl-24 ml-12">
            <h1 className="text-2xl m-2 text-black-400/25">{num + 1})</h1>
            <h1 className="text-2xl m-2 text-black-400/25">
              {questionArr[num]?.questions}
            </h1>
          </div>
          <div className="border-teal-500 rounded-2xl absolute right-24 top-32 border-2 mb-8 p-1 pl-2 pr-2 ">
            <h1 className="text-xl font-bold">
              Attempted: {num + "/" + questionArr.length}
            </h1>
          </div>
        </div>
        <ol className="w-3/5 ml-64">
          {questionArr[num]?.options?.map((answer, index) => (
            <li
              key={index}
              className={
                index === disable && disable != null
                  ? "show border border-gray-300 text-center cursor-pointer m-2 p-2 rounded-lg"
                  : "notshow border border-gray-300 text-center cursor-pointer m-2 p-2 rounded-lg"
              }
              onClick={() => {
                setAns((prev) => {
                  const updatedAnswers = [...prev];
                  updatedAnswers[num] = answer.option; // Store answer for the current question
                  return updatedAnswers;
                });
                handleQue(index);
              }}
            >
              {answer.option}
            </li>
          ))}
        </ol>
        <div className="mt-3 ml-80 pl-48">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
            onClick={() => {
              setNum(num + 1);
              setDisable(null);
            }}
          >
            Skip
          </button>
          {btnshow ? (
            <Link to="/showallanswer">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-1"
                onClick={() => {
                  dispatch(postUserResult(ans));
                  const obj = {
                    quizId: questionArr[0]._id, // Assuming this is the ID needed
                    userId: userID,
                    quizResult: ans,
                  };
                  dispatch(postQuizResult(obj));
                }}
              >
                Result
              </button>
            </Link>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-1"
              onClick={() => {
                setNum(num + 1);
                setDisable(null);
                if (questionArr.length - 1 === num) {
                  setBtnshow(true);
                }
              }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
