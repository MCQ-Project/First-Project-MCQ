import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Logouthandleraction } from "../../Redux/action.js";
import { Disclosure, Menu } from '@headlessui/react';
import { ToastContainer, toast } from "react-toastify";
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons for dark/light mode
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
  const userId = useSelector((state) => state.mernQuize.userId);
  const userName = useSelector((state) => state.mernQuize.userName);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location
  const dispatch = useDispatch();

  const logouthandler = () => {
    if (userName) {
      dispatch(Logouthandleraction());
      toast(`${userName} Successfully Logged Out`, { type: "success" });
      navigate("/");
    }
  };

  return (
    <Disclosure as="nav" className={`fixed top-0 left-0 w-full z-50 transition-all ${darkMode ? 'bg-gradient-to-r from-[#3d36a2] to-[#4f47e6] text-white' : 'bg-white text-black'} shadow`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img alt="Your Company" src="/mcq logo 2.png" className="h-8 w-auto" />
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
            <button onClick={() => setDarkMode(!darkMode)} className="text-gray-400 hover:text-black dark:hover:text-white flex items-center">
              {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
            {userId ? (
              <div className="relative ml-3">
                <Menu as="div" className="relative">
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="text-white">{userName}</span>
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                    <Menu.Item>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700">Your Profile</Link>
                    </Menu.Item>
                    <Menu.Item>
                      <button onClick={logouthandler} className="block px-4 py-2 text-sm text-gray-700">Sign out</button>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
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
