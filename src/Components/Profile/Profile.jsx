import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Profile = () => {
  const userName = useSelector((state) => state.mernQuize.userName);
  const darkMode = useSelector((state) => state.mernQuize.darkMode); // Assuming you have a darkMode state

  return (
    <div className={`min-h-screen flex items-center justify-center py-10 ${darkMode ? 'bg-gradient-to-r from-[#1e3a8a] to-[#1e40af]' : 'bg-white'}`}>
    <div className={`shadow-2xl h-96 w-11/12 sm:w-3/4 md:w-1/2 rounded-lg p-6 flex flex-col items-center transition duration-300 ${darkMode ? 'text-white bg-[#2c2c2c]' : 'text-black bg-white border border-gray-200'}`}>
      <h1 className="text-center mb-4">
        <strong className={`text-2xl font-extrabold italic ${darkMode ? 'text-white' : 'text-blue-600'}`}>
          Sweat more in practice, bleed less in war.
        </strong>
        <br />
        <p className="font-bold mt-2">– Khem Bhatt</p>
      </h1>
      <div className="flex w-full mb-6 mt-4">
        <img src="./profile.gif" alt="profile" className="w-1/2 h-64 object-cover rounded-lg shadow-md" />
        <h1 className={`ml-4 w-1/2 mt-32 text-2xl text-center ${darkMode ? 'text-white' : 'text-black'}`}>
          Welcome! {userName}👋
        </h1>
      </div>
      <div className="bg-[rgb(72,65,204)] rounded-2xl border-2 mb-8 p-1 pl-2 pr-2 w-full text-center shadow-lg transition-transform duration-300 transform hover:scale-105">
        <Link to="/">
          <button
            className={`text-xl font-bold rounded-md px-6 py-3 transition duration-300 ease-in-out transform shadow-md 
              ${darkMode ? 'bg-white text-black hover:bg-[rgb(99,202,142)] hover:text-white' : 'bg-white text-black hover:bg-blue-300'}`}
            style={{ backgroundColor: darkMode ? 'white' : 'white' }}
          >
            Attempt Quiz
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
};
