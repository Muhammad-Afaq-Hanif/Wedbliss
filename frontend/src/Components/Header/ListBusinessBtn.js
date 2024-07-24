import { Link } from "react-router-dom";
const ListBusinessBtn = function () {
  return (
    <div>
      <Link to="/vendor-authenticator">
        <button className="rounded-[25px] text-[16px] text-[#007F73] font-semibold border-[2px] px-[18px] py-[8px] border-[#007F73] hover:text-white hover:bg-[#007F73]">
          List your business
        </button>
      </Link>
    </div>
  );
};

export default ListBusinessBtn;
