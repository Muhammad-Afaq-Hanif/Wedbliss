import React from "react";
import { MdAddCircleOutline, MdDashboard } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SlUser } from "react-icons/sl";
import { GrServices } from "react-icons/gr";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton";

import ShortProfile from "../ShortProfile";
const SideBar = () => {
  return (
    <div class="w-3/12 mr-6">
      <ShortProfile />
      <div class="bg-white rounded-xl shadow-lg mb-6 px-6 py-3">
        <Link
          to={"/vendordashboard"}
          className="inline-block text-gray-600 hover:text-black my-3 w-full text-[16px]"
        >
          <span class="float-left pr-2 ">
            <MdDashboard />
          </span>
          <span className="float-left pr-2 mt-[-3px]"> Dashboard</span>
          <span className=" float-right">
            <MdKeyboardDoubleArrowRight />
          </span>
        </Link>
        <Link
          to={"/vendordashboard/addnewservice"}
          className="inline-block text-gray-600 hover:text-black my-3 w-full text-[16px]"
        >
          <span class="float-left pr-2 ">
            <MdAddCircleOutline />
          </span>
          <span className="float-left pr-2 mt-[-3px]"> Add new Service</span>
          <span className=" float-right">
            <MdKeyboardDoubleArrowRight />
          </span>
        </Link>
        <Link
          to={"/vendordashboard/services"}
          className="inline-block text-gray-600 hover:text-black my-3 w-full text-[16px]"
        >
          <span class="float-left pr-2 ">
            <GrServices />
          </span>
          <span className="float-left pr-2 mt-[-3px]"> Manage Services</span>
          <span className=" float-right">
            <MdKeyboardDoubleArrowRight />
          </span>
        </Link>
      </div>

      <div class="bg-white rounded-xl shadow-lg mb-6 px-6 py-3">
        <Link
          to="/dashboard/profile"
          className="inline-block text-gray-600 hover:text-black my-3 w-full text-[16px]"
        >
          <span class="float-left pr-2 ">
            <FaRegCircleUser />
          </span>
          <span className="float-left pr-2 mt-[-3px]"> Profile</span>
          <span className=" float-right">
            <MdKeyboardDoubleArrowRight />
          </span>
        </Link>
        <Link
          to="/dashboard/changepassword"
          className="inline-block text-gray-600 hover:text-black my-3 w-full text-[16px]"
        >
          <span class="float-left pr-2 ">
            <IoKeyOutline />
          </span>
          <span className="float-left pr-2 mt-[-3px]"> Change Password</span>
          <span className=" float-right">
            <MdKeyboardDoubleArrowRight />
          </span>
        </Link>
        <LogOutButton />
      </div>
    </div>
  );
};

export default SideBar;
