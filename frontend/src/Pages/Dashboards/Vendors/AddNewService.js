import React from "react";
import SideBar from "../../../Components/Dashboards/Vendor/SideBar";
import { IoHomeOutline, IoLogoCss3 } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
import { CgGirl } from "react-icons/cg";
import { FaCamera } from "react-icons/fa6";
import { MdCardGiftcard } from "react-icons/md";

const AddNewService = () => {
  return (
    <div className="mt-[50px]">
      <div class="bg-[#007F73]">
        <div class="flex flex-row pt-24 px-10 pb-4">
          <SideBar />
          <div class="relative bg-white p-6 shadow-xl mx-auto w-full h-[80px] text-center pb-[20px] mt-[150px] rounded-2xl border-dashed border-2 border-gray-500">
            <div class="mx-auto flex w-full  flex-row justify-around text-center">
              <div className="text-center text-[20px] text-[#007F73] font-[800] hover:text-[black]">
                <Link to="marriagehall">
                  <IoHomeOutline />
                  Marriage Hall
                </Link>
              </div>
              <div className="text-center text-[20px] text-[#007F73] font-[800] hover:text-[black]">
                <Link to="catering">
                  <ImSpoonKnife />
                  Catering
                </Link>
              </div>
              <div className="text-center text-[20px] text-[#007F73] font-[800] hover:text-[black]">
                <Link to="decoration">
                  <IoLogoCss3 />
                  Decoration
                </Link>
              </div>
              <div className="text-center text-[20px] text-[#007F73] font-[800] hover:text-[black]">
                <Link to="parlor">
                  <CgGirl />
                  Parlor
                </Link>
              </div>
              <div className="text-center text-[20px] text-[#007F73] font-[800] hover:text-[black]">
                <Link to="photographer">
                  <FaCamera />
                  Photography
                </Link>
              </div>
              <div className="text-center text-[20px] text-[#007F73] hover:text-[black] font-[800]">
                <Link to="invitation-card">
                  <MdCardGiftcard />
                  Invitation Card
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
