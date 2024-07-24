import React from "react";
import { GoDotFill } from "react-icons/go";

const Welcome = () => {
  return (
    <div className="grid grid-cols-[30%_70%] gap-4 bg-white  rounded-xl shadow-lg mb-6 px-6 py-3 items-center">
      <div>
        <img
          className=" rounded-[100%]"
          src={`http://127.0.0.1:8000/uploads/man_admin.png`}
          alt="Ali"
        />
      </div>
      <div>
        <h2 className="text-[20px] font-[600]">Ali Latif</h2>
        <div className="grid grid-cols-[10%_80%] items-center text-[green] text-[14px]">
          <h2 className="">
            <GoDotFill />
          </h2>
          <h2>Online</h2>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
