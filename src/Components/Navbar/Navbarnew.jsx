import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Logouthandleraction } from "../../Redux/action.js";
import { Disclosure } from '@headlessui/react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Profile', href: '/profile' },
  { name: 'Quizzes', href: '/quizzes' },
  { name: 'Show Answers', href: '/showallanswer' },
  // Add more links as needed
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbarnew = () => {
  const [darkMode, setDarkMode] = useState(false);
  const userId = useSelector((state) => state.mernQuize.userId) || localStorage.getItem("userId");
  const userName = useSelector((state) => state.mernQuize.userName) || localStorage.getItem("userName");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // On component mount, check localStorage for user details
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      // If a user is logged in, persist the state
    }
  }, []);

  const logouthandler = () => {
    if (userName) {
      dispatch(Logouthandleraction());
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      localStorage.removeItem("token");
      toast(`${userName} Successfully Logged Out`, { type: "success" });
      navigate("/");
    }
  };

  return (
    <Disclosure as="nav" className={`fixed top-0 left-0 w-full z-50 transition-all ${darkMode ? 'bg-gradient-to-r from-blue-800 to-blue-600 text-white' : 'bg-white text-black'} shadow`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img alt="Your Company" src="/mcq-logo-2.png" className="h-8 w-auto" />
          </Link>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black')
                      : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-200'),
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={() => setDarkMode(!darkMode)} className="text-gray-400 hover:text-black flex items-center">
              {darkMode ? "🌞" : "🌙"}
            </button>
            {userId ? (
              <div className="ml-4 flex items-center space-x-4">
                <span className="text-gray-800">{userName}</span>
                <button onClick={logouthandler} className="text-gray-800 hover:text-gray-600">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="text-gray-800 hover:text-gray-600">Login</Link>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </Disclosure>
  );
};
