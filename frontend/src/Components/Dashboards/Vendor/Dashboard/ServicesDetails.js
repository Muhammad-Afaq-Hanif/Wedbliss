import React from "react";
import { useAdminContext } from "../../../../Providers/Dashboards/Admin/AdminProvider";
import { RiUserStarLine } from "react-icons/ri";
import { FaUserGear } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { PiBowlSteam } from "react-icons/pi";
import { SiCodesignal } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";

import {
  MdCardGiftcard,
  MdOutlineGirl,
  MdOutlinePhotoCamera,
} from "react-icons/md";
import { useVendorContext } from "../../../../Providers/Dashboards/Vendor/VendorProvider";

const UserChart = () => {
  const { totalData } = useVendorContext();

  return (
    <div className="flex">
      <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-[white]  rounded-md w-5/12 ml-2 p-4">
        <div class="flex gap-2 items-center">
          <span class="font-bold text-2xl text-[#FED7AA]">
            {totalData.totalServices}
          </span>
          <span className="text-white text-2xl">
            <MdMiscellaneousServices />
          </span>
        </div>
        <span class="font-semibold opacity-90  text-center text-[12px] text-[white] ">
          Total Services <br /> Found
        </span>
      </div>

      <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-[white]  rounded-md w-5/12 ml-2 p-4">
        <div class="flex gap-2 items-center">
          <span class="font-bold text-2xl text-[#FED7AA]">
            {totalData.marriageHall}
          </span>
          <span className="text-white text-2xl">
            <IoHomeOutline />
          </span>
        </div>
        <span class="font-semibold opacity-90  text-center text-[12px] text-[white] ">
          Total Marriage Halls <br /> Found
        </span>
      </div>
      <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-[white]  rounded-md w-5/12 ml-2 p-4">
        <div class="flex gap-2 items-center">
          <span class="font-bold text-2xl text-[#FED7AA]">
            {totalData.catering}
          </span>
          <span className="text-white text-2xl">
            <PiBowlSteam />
          </span>
        </div>
        <span class="font-semibold opacity-90  text-center text-[12px] text-[white] ">
          Total Caterings <br /> Found
        </span>
      </div>
      <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-[white]  rounded-md w-5/12 ml-2 p-4">
        <div class="flex gap-2 items-center">
          <span class="font-bold text-2xl text-[#FED7AA]">
            {totalData.decoration}
          </span>
          <span className="text-white text-2xl">
            <SiCodesignal />
          </span>
        </div>
        <span class="font-semibold opacity-90  text-center text-[12px] text-[white] ">
          Total Decoration <br /> Found
        </span>
      </div>
      <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-[white]  rounded-md w-5/12 ml-2 p-4">
        <div class="flex gap-2 items-center">
          <span class="font-bold text-2xl text-[#FED7AA]">
            {totalData.parlor}
          </span>
          <span className="text-white text-2xl">
            <MdOutlineGirl />
          </span>
        </div>
        <span class="font-semibold opacity-90  text-center text-[12px] text-[white] ">
          Total Parlor <br /> Found
        </span>
      </div>
      <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-[white]  rounded-md w-5/12 ml-2 p-4">
        <div class="flex gap-2 items-center">
          <span class="font-bold text-2xl text-[#FED7AA]">
            {totalData.photographer}
          </span>
          <span className="text-white text-2xl">
            <MdOutlinePhotoCamera />
          </span>
        </div>
        <span class="font-semibold opacity-90  text-center text-[12px] text-[white] ">
          Total PhotoGraphy <br /> Found
        </span>
      </div>
      <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-[white]  rounded-md w-5/12 ml-2 p-4">
        <div class="flex gap-2 items-center">
          <span class="font-bold text-2xl text-[#FED7AA]">
            {totalData.totalServices}
          </span>
          <span className="text-white text-2xl">
            <MdCardGiftcard />
          </span>
        </div>
        <span class="font-semibold opacity-90  text-center text-[12px] text-[white] ">
          Total Invitation Card <br /> Found
        </span>
      </div>
    </div>
  );
};

export default UserChart;
