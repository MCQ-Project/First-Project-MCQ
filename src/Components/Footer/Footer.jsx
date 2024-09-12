import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
<<<<<<< HEAD
    <div className="footer xl:mt-12 bg-slate-400 tracking-widest">
      <div className="footer-main w-full xl:w-4/5 xl:m-auto mb-2 p-4 xl:flex">
        <div className="flex w-full justify-between xl:w-6/12">
          <div className="footer-col-1 w-6/12 xl:w-full space-y-4">
            <h3
              className="text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "#4fa0e3",
                fontWeight: "bolder",
              }}
            >
              MERN-Quiz-App
            </h3>
            <p className="text-white text-xs pr-4 xl:text-sm">
              WHERE PASSION MEETS PERFECTION !
            </p>
          </div>
          <div className="footer-col-2 w-6/12 xl:w-full mr-2 md:mr-0 space-y-4">
            <h3
              className="text-white text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "#4fa0e3",
                fontWeight: "bolder",
              }}
            >
              quiz
            </h3>
            <Link
              to="/"
              className="no-underline text-white text-xs block xl:text-sm"
            >
              All Quiz
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-between my-4 xl:w-6/12 xl:my-0">
          <div className="footer-col-3 w-6/12 xl:w-full space-y-4">
            <h3
              className="text-white text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "#4fa0e3",
                fontWeight: "bolder",
              }}
            >
              follow
            </h3>
            <div className="flex items-center">
              <i className="fa fa-instagram text-white mr-1"></i>
              <a
                href="https://www.instagram.com/chavhansudhir/?hl=en"
                className="no-underline text-white text-xs block xl:text-sm"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center">
              <i className="fa fa-linkedin text-white mr-1"></i>
              <a
                href="https://www.linkedin.com/in/sudhirpc/"
                className="no-underline text-white text-xs block xl:text-sm"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <i className="fa fa-facebook text-white mr-1"></i>
              <a
                href="https://www.facebook.com/sudhir.chavhan.583"
                className="no-underline text-white text-xs block xl:text-sm"
                target="_blank"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="footer-col-4 w-6/12 xl:w-full space-y-4 mr-2 md:mr-0">
            <h3
              className="text-white text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "#4fa0e3",
                fontWeight: "bolder",
              }}
            >
              Contact
            </h3>
            <p className="flex items-center my-1">
              <i
                className="fa fa-home text-white text-sm"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm">
                Kanchanpur,Nepal
              </span>
            </p>
            <p className="flex items-center my-1">
              <i
                className="fa fa-envelope text-white text-xs"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm">
                khembhatt369@gmail.com
              </span>
            </p>
            <p className="flex items-center my-1">
              <i
                className="fa fa-phone text-white"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm">
                +977-9869905888
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-white text-center mt-4 pb-4">
        MERN Quiz App Designed and Developed By Team LEARNERS.
=======
   <>
   <div className="footer bg-slate-400 tracking-widest xl:mt-12">
  <div className="footer-main w-full xl:w-4/5 xl:m-auto mb-2 p-4 xl:flex xl:justify-between">
    
    {/* <!-- Column 1 --> */}
    <div className="footer-col w-full xl:w-1/4 mb-4 xl:mb-0 space-y-4">
      <h3
        className="text-xl uppercase p-1 border-b-2 border-white"
        style={{
          color: "#4fa0e3",
          fontWeight: "bolder",
        }}
      >
        MERN-Quiz-App
      </h3>
      <p className="text-white text-xs xl:text-sm">
        WHERE PASSION MEETS PERFECTION!
>>>>>>> c3e060b716637bc97d2c87d0d5e398306d969ff0
      </p>
    </div>

    {/* <!-- Column 2 --> */}
    <div className="footer-col w-full xl:w-1/4 mb-4 xl:mb-0 space-y-4">
      <h3
        className="text-xl uppercase p-1 border-b-2 border-white"
        style={{
          color: "#4fa0e3",
          fontWeight: "bolder",
        }}
      >
        Quiz
      </h3>
      <Link
        to="/"
        className="text-white text-xs xl:text-sm"
      >
        All Quiz
      </Link>
    </div>

    {/* <!-- Column 3 --> */}
    <div className="footer-col w-full xl:w-1/4 mb-4 xl:mb-0 space-y-4">
      <h3
        className="text-xl uppercase p-1 border-b-2 border-white"
        style={{
          color: "#4fa0e3",
          fontWeight: "bolder",
        }}
      >
        Follow
      </h3>
      <div className="flex flex-col space-y-2">
        <a
          href="https://www.instagram.com/chavhansudhir/?hl=en"
          className="flex items-center text-white text-xs xl:text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram text-white mr-2"></i>
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/sudhirpc/"
          className="flex items-center text-white text-xs xl:text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin text-white mr-2"></i>
          LinkedIn
        </a>
        <a
          href="https://www.facebook.com/sudhir.chavhan.583"
          className="flex items-center text-white text-xs xl:text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook text-white mr-2"></i>
          Facebook
        </a>
      </div>
    </div>

    {/* <!-- Column 4 --> */}
    <div className="footer-col w-full xl:w-1/4 space-y-4">
      <h3
        className="text-xl uppercase p-1 border-b-2 border-white"
        style={{
          color: "#4fa0e3",
          fontWeight: "bolder",
        }}
      >
        Contact
      </h3>
      <p className="flex items-center text-white text-xs xl:text-sm">
        <i className="fa fa-home mr-2"></i>
        Mahendranagar, Kanchanpur
      </p>
      <p className="flex items-center text-white text-xs xl:text-sm">
        <i className="fa fa-envelope mr-2"></i>
        khembhatt369@gmail.com
      </p>
      <p className="flex items-center text-white text-xs xl:text-sm">
        <i className="fa fa-phone mr-2"></i>
        +977 9869905888
      </p>
    </div>
  </div>

  <p className="text-white text-center mt-4 pb-4 text-xs xl:text-sm">
    MERN Quiz App Designed and Developed By Team Learners.
  </p>
</div>

   </>
  );
};
