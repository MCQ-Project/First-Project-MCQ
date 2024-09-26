import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUserDataFromBackend } from "../../Redux/action.js";
import { UserdetailForAdmin } from "./UserdetailForAdmin.jsx";
import khem from "../Admin/khem.jpg";
import { QuizForm } from "./QuizForm.jsx";
import axios from "axios";
import { ShowQuiz } from "./Quizdisplay"; // Correctly import ShowQuiz

export const Admin = () => {
  const allUsers = useSelector((state) => state.mernQuize.Alluser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [error, setError] = useState(null);

  const addquiz = () => {
    navigate("/addquiz");
  };

  useEffect(() => {
    dispatch(getAllUserDataFromBackend());
    fetchQuizQuestions(); // Fetch quiz questions when component mounts
  }, [dispatch]);

  const fetchQuizQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:3756/quiz/display");
      setQuizQuestions(response.data.questionArray || []); // Set questions to state
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      setError("Failed to fetch quiz questions. Please try again later."); // Set error message
    }
  };

  return (
    <div>
      <div className="md:w-11/12 mx-auto bg-gray-100/10 flex p-4 my-6 mt-24">
        <div className="w-7/12">
          <div className="ml-32">
            <img
              className="h-[325px] w-[250px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              src={khem}
              alt="Khem Bhatt"
            />
          </div>
          <div>
            <h1 className="title text-4xl font-semibold flex text-black pb-6 mt-8 ml-32" style={{ fontFamily: "Quicksand" }}>
              Hi Admin,
              <span className="text-4xl font-semibold text-sky-500 pb-4 ml-2 mt-0" style={{ fontFamily: "Quicksand" }}>
                Khem Bhatt👋
              </span>
            </h1>
          </div>
          <div className="ml-32 leading-normal">
            <p className="text-lg text-black-100 leading-loose">
              A Computer Engineering student from Far Western University, Nepal, I'm passionate about coding and technology. I enjoy learning and exploring new technologies, and in my free time, I love traveling and engaging in creative problem-solving. — Khem Bhatt
            </p>
          </div>
        </div>
        <div className="w-5/12 p-16 ml-24">
          <img
            src={khem}
            alt="admin"
            className="h-[300px] w-[300px] rounded-full"
          />
        </div>
      </div>
      <div className="border-red-500 absolute bg-orange-600 right-24 top-28 border-2 mb-8 p-1 pl-2 pr-2">
        <button onClick={addquiz}> ADD QUIZ </button>
      </div>
      <QuizForm />

      {/* Using the ShowQuiz component to show quiz questions */}
      <ShowQuiz quizQuestions={quizQuestions} error={error} />

      <UserdetailForAdmin data={allUsers} />
    </div>
  );
};
