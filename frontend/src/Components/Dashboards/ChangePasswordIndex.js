import React from "react";
import { IoKeyOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { useChangePasswordContext } from "../../Providers/Dashboards/ChangePasswordProvider";

const ChangePasswordIndex = () => {
  const { data, setData, setClicked } = useChangePasswordContext();
  return (
    <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
      <div class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center bg-white dark:bg-[#007D71]/40">
        <div class="bg-[#007D71] shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <span className="text-[white] text-[50px]">
            <IoKeyOutline />
          </span>
        </div>
        <form
          class="p-6 md:p-24"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h1 class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 text-[#007D71]">
            Change yours Password
          </h1>
          <div class="flex items-center text-lg mb-6 md:mb-8 mt-[50px]">
            <input
              type="password"
              class="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Enter Old Password.."
              value={data.oldPassword}
              onChange={(event) => {
                setData({ ...data, oldPassword: event.target.value });
              }}
            />
          </div>
          <div class="flex items-center text-lg mb-6 md:mb-8">
            <input
              type="password"
              class="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Enter New Password"
              value={data.password}
              onChange={(event) => {
                setData({ ...data, password: event.target.value });
              }}
            />
          </div>
          <div class="flex items-center text-lg mb-6 md:mb-8">
            <input
              type="password"
              class="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Confirm Password"
              value={data.passwordConfirm}
              onChange={(event) => {
                setData({ ...data, passwordConfirm: event.target.value });
              }}
            />
          </div>
          <button
            class="bg-[#007D71] font-medium p-2 md:p-4 text-white uppercase w-full rounded"
            onClick={() => {
              setClicked(true);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordIndex;
