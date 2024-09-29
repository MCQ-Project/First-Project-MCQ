import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginAdminId,
  loginAdminName,
  loginUser,
  loginUserName,
} from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:8081/api/user/login", user)
      .then((res) => {
        console.log(res);
        if (res.data.user.email === "khembhatt369@gmail.com") {
          dispatch(loginAdminId(res.data.user._id));
          dispatch(loginAdminName(res.data.user.name));
          toast(`Welcome Admin ${res.data.user.name}`, {
            type: "success",
          });
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('userId',res.data.user._id)
          localStorage.setItem('userName',res.data.user.fullname)
          localStorage.setItem('userEmail',res.data.user.email)
          localStorage.setItem('isAuth',true)
          setTimeout(() => {
            navigate("/");
          }, 4000);
        } else {
          dispatch(loginUser(res.data.user._id));
          dispatch(loginUserName(res.data.user.name));
          toast(`Successfully Logged In`, {
            type: "success",
          });
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('userId',res.data.user._id)
          localStorage.setItem('userName',res.data.user.fullname)
          localStorage.setItem('userEmail',res.data.user.email)
          localStorage.setItem('isAuth',true)
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((err) => {
        toast("Invalid Credentials", {
          type: "error",
        });
      });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
     
      <div className="lg:w-1/2 flex justify-center items-center p-6">
        <div className="sm:w-full sm:max-w-sm shadow-lg p-6 rounded-lg bg-white">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  value={user.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  placeholder="Enter your Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={user.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  placeholder="Enter your Password"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={login}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <ToastContainer />

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center p-6">
        <img className="h-96 w-96 object-cover" src="./login.gif" alt="Login gif" />
      </div>
    </div>
  );
};

export default Login;