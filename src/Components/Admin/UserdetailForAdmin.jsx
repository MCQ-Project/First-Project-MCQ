import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserByAdmin } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserdetailForAdmin = ({ data }) => {
  const dispatch = useDispatch();

  const deleteUser = async (userId) => {
    if (userId) {
      try {
        await dispatch(deleteUserByAdmin(userId)); // Make sure this is async if you handle it that way
        toast.success("Successfully Deleted the User");
      } catch (error) {
        toast.error("Error deleting user. Please try again.");
      }
    } else {
      toast.error("You can't delete the User");
    }
  };

  return (
    <div className="w-4/5 m-auto">
      <div className="bg-teal-500 rounded-lg w-56 pl-16 p-4 text-2xl mb-4">
        <h1>List of Users</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 bg-[rgb(72,65,204)] p-4 rounded-lg">
        {data.map((user) => (
          <div className="flex flex-col items-start p-4 mb-2 bg-white dark:bg-gray-800 rounded-md shadow-md" key={user._id}>
            <div className="flex items-center w-full">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <img
                    alt="profile"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
                    className="mx-auto object-cover rounded-full h-10 w-10"
                  />
                </a>
              </div>
              <div className="flex-1 pl-1">
                <div className="font-medium dark:text-white">{user.name}</div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                  {user.email}
                </div>
              </div>
              <div className="flex items-center">
                <button 
                  className="p-2 rounded-full hover:bg-red-200 transition duration-200" 
                  onClick={() => deleteUser(user._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
