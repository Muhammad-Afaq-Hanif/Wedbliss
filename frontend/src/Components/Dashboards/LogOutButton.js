import React, { useEffect, useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const logOut = async () => {
      if (clicked) {
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/api/v1/me/log-out`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }
          );

          if (response.ok) {
            alert("Logout successfully!");
            navigate("/");
          } else {
            alert("Failed to Logout.");
          }
        } catch (error) {
          console.error("Error Logging Out:", error);
          alert("An error occurred while Logging Out.");
        } finally {
          setClicked(false);
        }
      }
    };

    logOut();
  }, [clicked]);
  return (
    <div
      className="inline-block text-gray-600 hover:text-black my-3 w-full text-[16px] cursor-pointer"
      onClick={() => {
        setClicked(true);
      }}
    >
      <span class="float-left pr-2 ">
        <FaPowerOff />
      </span>
      <span className="float-left pr-2 mt-[-3px]"> LogOut</span>
      <span className=" float-right">
        <MdKeyboardDoubleArrowRight />
      </span>
    </div>
  );
};

export default LogOutButton;
