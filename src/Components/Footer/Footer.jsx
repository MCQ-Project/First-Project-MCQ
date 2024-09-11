import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer bg-green-600 tracking-widest xl:mt-12">
    <div className="footer-main w-full xl:w-4/5 xl:m-auto mb-2 p-4 xl:flex xl:justify-between">
     
     {/* <!-- Column 1 --> */}
     <div className="footer-col w-full xl:w-1/4 mb-4 xl:mb-0 space-y-4">
       <h3
         className="text-xl uppercase p-1 border-b-2 border-white"
         style={{
           color: "#ffffff", /* White color for the header text */
           fontWeight: "bolder",
         }}
       >
         MERN-Quiz-App
       </h3>
       <p className="text-white text-xs xl:text-sm">
         WHERE PASSION MEETS PERFECTION!
       </p>
     </div>
 
     {/* <!-- Column 2 --> */}
     <div className="footer-col w-full xl:w-1/4 mb-4 xl:mb-0 space-y-4">
       <h3
         className="text-xl uppercase p-1 border-b-2 border-white"
         style={{
           color: "#ffffff", /* White color for the header text */
           fontWeight: "bolder",
         }}
       >
         Quiz
       </h3>
       <Link
         to="/"
         className="text-white text-xs xl:text-sm hover:text-yellow-300 transition-colors duration-300"
       >
         All Quiz
       </Link>
     </div>
 
     {/* <!-- Column 3 --> */}
     <div className="footer-col w-full xl:w-1/4 mb-4 xl:mb-0 space-y-4">
       <h3
         className="text-xl uppercase p-1 border-b-2 border-white"
         style={{
           color: "#ffffff", /* White color for the header text */
           fontWeight: "bolder",
         }}
       >
         Follow
       </h3>
       <div className="flex flex-col space-y-2">
         <a
           href="https://www.instagram.com/chavhansudhir/?hl=en"
           className="flex items-center text-white text-xs xl:text-sm hover:text-yellow-300 transition-colors duration-300"
           target="_blank"
           rel="noopener noreferrer"
         >
           <i className="fa fa-instagram text-white mr-2"></i>
           Instagram
         </a>
         <a
           href="https://www.linkedin.com/in/sudhirpc/"
           className="flex items-center text-white text-xs xl:text-sm hover:text-yellow-300 transition-colors duration-300"
           target="_blank"
           rel="noopener noreferrer"
         >
           <i className="fa fa-linkedin text-white mr-2"></i>
           LinkedIn
         </a>
         <a
           href="https://www.facebook.com/sudhir.chavhan.583"
           className="flex items-center text-white text-xs xl:text-sm hover:text-yellow-300 transition-colors duration-300"
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
           color: "#ffffff", /* White color for the header text */
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
