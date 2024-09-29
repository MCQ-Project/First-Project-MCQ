import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eng from "./QuizNew/eng.png"; // Ensure this path is correct

export const TopicQuiz = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const navigate = useNavigate();

  // Optional: Redirect to registration if no userId
  useEffect(() => {
    // if (!userId) {
    //   // toast.warning("Please register before accessing quizzes");
    //   navigate("/register");
    // }
  }, [userId, navigate]);

  return (
    <div className="mt-20 mb-10 relative z-10 bg-white dark:bg-[rgba(82,15,204,0.8)]">
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl text-black dark:text-white">Preparation Topics</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 p-8 m-auto gap-8">
        {/* Entrance Preparation Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            src={eng} // Replace with your image path
            alt="Entrance Preparation"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-[rgba(82,15,204,1)]">Engineering Entrance Preparation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Get ready for your entrance exams with our comprehensive quizzes and resources tailored for success.
            </p>
            <Link to="/engineering" className="text-[rgba(82,15,204,1)] hover:underline transition-all duration-300">
              Start Now
            </Link>
          </div>
        </div>

        {/* License Preparation Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            src={eng} 
            alt="License Preparation"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-[rgba(82,15,204,1)]">License Preparation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Prepare for your licensing exams with targeted quizzes and study materials designed for your success.
            </p>
            <Link to="/license" className="text-[rgba(82,15,204,1)] hover:underline transition-all duration-300">
              Start Now
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
