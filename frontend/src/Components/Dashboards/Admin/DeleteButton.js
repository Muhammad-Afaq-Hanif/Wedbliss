import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAdminDeleteContext } from "../../../Providers/Dashboards/Admin/AdminDeleteProvider";
const DeleteButton = ({ elementId }) => {
  const { setServiceId } = useAdminDeleteContext();
  return (
    <td
      class="px-2 py-4 whitespace-nowrap  cursor-pointer"
      onClick={() => {
        setServiceId(elementId);
      }}
    >
      <div className=" text-[white] bg-red-600 py-[5px] px-[5px] grid grid-cols-[20%_70%] items-center gap-[10%] justify-center rounded-lg">
        <span className="text-[18px]">
          <RiDeleteBinLine />
        </span>
        <h2>Delete</h2>
      </div>
    </td>
  );
};

export default DeleteButton;
