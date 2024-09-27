import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);
  
  const navigate = useNavigate();

  // Input validation
  const validateInputs = () => {
    const { name, email, password, reEnterPassword } = user;
    if (!name || !email || !password || !reEnterPassword) {
      toast("All fields are required", { type: "error" });
      return false;
    }
    if (password !== reEnterPassword) {
      toast("Passwords do not match", { type: "error" });
      return false;
    }
    return true;
  };

  const register = () => {
    if (validateInputs()) {
      axios
        .post("http://localhost:3756/auth/register", user)
        .then((res) => {
          toast("Successfully Registered", {
            type: "success",
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((err) => {
          console.error("Registration error:", err);
          toast("Registration Failed. Please try again", {
            type: "error",
          });
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-4 bg-white shadow-md rounded-lg">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={user.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={user.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={user.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                placeholder="Your Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="reEnterPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Re-enter Password
            </label>
            <div className="mt-2 relative">
              <input
                id="reEnterPassword"
                name="reEnterPassword"
                type={showReEnterPassword ? "text" : "password"}
                required
                value={user.reEnterPassword}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                placeholder="Re-enter Password"
              />
              <button
                type="button"
                onClick={() => setShowReEnterPassword(!showReEnterPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500"
              >
                {showReEnterPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={register}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <ToastContainer />

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
