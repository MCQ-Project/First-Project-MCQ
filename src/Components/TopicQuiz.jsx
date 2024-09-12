import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TopicQuiz = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const navigate = useNavigate();
  const name = useSelector((state) => state.mernQuize.userName);

  // Optional: Redirect to registration if no userId
  useEffect(() => {
    if (!userId) {
      toast.warning("Please register before accessing quizzes");
      navigate("/register");
    }
  }, [userId, navigate]);

  const topics = [
    { path: "/quiz/html", title: "Physics", image: "/physics1.jpg" },
    { path: "/quiz/css", title: "Chemistry", image: "/css3.gif" },
    { path: "/quiz/javascript", title: "Mathematics", image: "/math.jpeg" },
    { path: "/quiz/react", title: "English", image: "/english 22.jpg" },
    { path: "/quiz/redux", title: "Redux", image: "/redux.svg" },
    { path: "/quiz/mongodb", title: "MongoDb", image: "/mongo.gif" }
  ];

  return (
    <div className="mt-10 mb-10">
      <div className="justify-self-center ml-96">
        <h1 className="font-bold text-2xl ml-44 pl-12">Topics</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 p-10 m-auto gap-8 shadow-2xl">
        {topics.map(({ path, title, image }) => (
          <Link key={title} to={userId ? path : "/register"}>
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold h-36 flex items-center rounded-2xl overflow-hidden transition-all duration-300 ease-in-out transform hover:bg-transparent hover:border-green-600 hover:shadow-lg">
              <div className="w-3/5 h-full bg-green-600 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-transparent hover:text-green-600">
                <h1 className="pt-12 pl-16">{title}</h1>
              </div>
              <img
                className="w-2/5 h-full object-cover rounded-2xl transition-all duration-300 ease-in-out hover:opacity-70"
                src={image}
                alt={title}
              />
            </div>
          </Link>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
