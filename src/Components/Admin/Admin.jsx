import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUserDataFromBackend } from "../../Redux/action.js";
import axios from "axios";
import khem from "../Admin/khem.jpg";

export const Admin = () => {
  const allUsers = useSelector((state) => state.mernQuize.Alluser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizFormData, setQuizFormData] = useState({ question: '', answers: [], explanation: '', yearID: null });
  const [editQuizMode, setEditQuizMode] = useState(false);
  const [currentQuizId, setCurrentQuizId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // User state
  const [userFormData, setUserFormData] = useState({ name: '', email: '', password: '' });
  const [editUserMode, setEditUserMode] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    fetchQuizQuestions();
    dispatch(getAllUserDataFromBackend());
  }, [dispatch]);

  const fetchQuizQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:3756/quiz/display");
      setQuizQuestions(response.data || []);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      setError("Failed to fetch quiz questions. Please try again later.");
    }
  };

  // Quiz handlers
  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setQuizFormData({ ...quizFormData, [name]: value });
  };

  const handleAddAnswer = () => {
    setQuizFormData({
      ...quizFormData,
      answers: [...quizFormData.answers, { text: '', correct: false }]
    });
  };

  const handleAnswerChange = (index, e) => {
    const { name, value } = e.target;
    const answers = [...quizFormData.answers];
    answers[index][name] = value;
    setQuizFormData({ ...quizFormData, answers });
  };

  const handleCorrectAnswerChange = (index) => {
    const answers = [...quizFormData.answers];
    answers.forEach((answer, i) => answer.correct = i === index);
    setQuizFormData({ ...quizFormData, answers });
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editQuizMode) {
        await axios.put(`http://localhost:3756/quiz/update/${currentQuizId}`, quizFormData);
      } else {
        await axios.post("http://localhost:3756/quiz/add", quizFormData);
      }
      setQuizFormData({ question: '', answers: [], explanation: '', yearID: null });
      setEditQuizMode(false);
      setCurrentQuizId(null);
      fetchQuizQuestions();
    } catch (error) {
      console.error("Error submitting quiz data:", error);
      setError("Failed to submit quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditQuiz = (quiz) => {
    setQuizFormData({ question: quiz.question, answers: quiz.answers, explanation: quiz.explanation, yearID: quiz.yearID });
    setEditQuizMode(true);
    setCurrentQuizId(quiz._id);
  };

  const handleDeleteQuiz = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3756/quiz/delete/${id}`);
      fetchQuizQuestions();
    } catch (error) {
      console.error("Error deleting quiz:", error);
      setError("Failed to delete quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // User handlers
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editUserMode) {
        await axios.put(`http://localhost:3756/user/update/${currentUserId}`, userFormData);
      } else {
        await axios.post("http://localhost:3756/user/register", userFormData);
      }
      setUserFormData({ name: '', email: '', password: '' });
      setEditUserMode(false);
      setCurrentUserId(null);
      dispatch(getAllUserDataFromBackend());
    } catch (error) {
      console.error("Error submitting user data:", error);
      setError("Failed to submit user data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditUser = (user) => {
    setUserFormData({ name: user.name, email: user.email, password: '' });
    setEditUserMode(true);
    setCurrentUserId(user._id);
  };

  const handleDeleteUser = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3756/user/delete/${id}`);
      dispatch(getAllUserDataFromBackend());
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("Failed to delete user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container p-6 bg-gray-100">
      <div className="header flex justify-between items-center mb-8">
        <div className="profile">
          <img src={khem} alt="Khem Bhatt" className="h-[150px] w-[150px] rounded-full shadow-lg" />
          <h1 className="text-3xl font-bold text-gray-800">Hi Admin, Khem Bhatt👋</h1>
        </div>
        <button onClick={() => navigate("/addquiz")} className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
          ADD QUIZ
        </button>
      </div>

      {/* Quiz Management Section */}
      <div className="quiz-management mt-8 p-4 bg-white shadow-lg rounded">
        <h2 className="text-2xl font-semibold">Quiz Management</h2>
        <form onSubmit={handleQuizSubmit} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            name="question"
            placeholder="Question"
            value={quizFormData.question}
            onChange={handleQuizChange}
            className="border p-2 rounded"
            required
          />
          {quizFormData.answers.map((answer, index) => (
            <div key={index} className="flex items-center">
              <input
                type="text"
                name="text"
                placeholder="Answer"
                value={answer.text}
                onChange={(e) => handleAnswerChange(index, e)}
                className="border p-2 rounded"
                required
              />
              <label className="ml-2">
                <input
                  type="radio"
                  name="correctAnswer"
                  checked={answer.correct}
                  onChange={() => handleCorrectAnswerChange(index)}
                />
                Correct
              </label>
            </div>
          ))}
          <button type="button" onClick={handleAddAnswer} className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600">
            Add Answer
          </button>
          <input
            type="text"
            name="explanation"
            placeholder="Explanation"
            value={quizFormData.explanation}
            onChange={handleQuizChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="yearID"
            placeholder="Year ID"
            value={quizFormData.yearID || ''}
            onChange={handleQuizChange}
            className="border p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {loading ? 'Processing...' : editQuizMode ? 'Update Quiz' : 'Add Quiz'}
          </button>
        </form>

        <h3 className="text-xl font-semibold mt-6">All Quizzes</h3>
        {loading ? (
          <p>Loading quizzes...</p>
        ) : (
          <ul className="mt-4">
            {quizQuestions.map(quiz => (
              <li key={quiz._id} className="flex justify-between items-center border-b py-2">
                <span>{quiz.question}</span>
                <div>
                  <button onClick={() => handleEditQuiz(quiz)} className="bg-yellow-400 text-white p-1 rounded mr-2 hover:bg-yellow-500">Edit</button>
                  <button onClick={() => handleDeleteQuiz(quiz._id)} className="bg-red-500 text-white p-1 rounded hover:bg-red-600">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* User Management Section */}
      <div className="user-management mt-8 p-4 bg-white shadow-lg rounded">
        <h2 className="text-2xl font-semibold">User Management</h2>
        <form onSubmit={handleUserSubmit} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userFormData.name}
            onChange={handleUserChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userFormData.email}
            onChange={handleUserChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userFormData.password}
            onChange={handleUserChange}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {loading ? 'Processing...' : editUserMode ? 'Update User' : 'Add User'}
          </button>
        </form>

        <h3 className="text-xl font-semibold mt-6">All Users</h3>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <ul className="mt-4">
            {allUsers.map(user => (
              <li key={user._id} className="flex justify-between items-center border-b py-2">
                <span>{user.name} ({user.email})</span>
                <div>
                  <button onClick={() => handleEditUser(user)} className="bg-yellow-400 text-white p-1 rounded mr-2 hover:bg-yellow-500">Edit</button>
                  <button onClick={() => handleDeleteUser(user._id)} className="bg-red-500 text-white p-1 rounded hover:bg-red-600">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Error Handling */}
      {error && <div className="error-message text-red-500 mt-4">{error}</div>}
    </div>
  );
};
