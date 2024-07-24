import { Link } from "react-router-dom";

const AccountBtn = function () {
  return (
    <Link to="/login/users">
      <div className="grid grid-cols-2 gap-[0px] rounded-[25px] border-[2px] items-center border-[#AFB6BB] bg-[#F1F1F1] py-[6px] px-[5px]">
        <img className="h-[15px]" src="/images/header/menu.svg" alt="menu" />
        <img src="/images/header/user.svg" alt="user" />
      </div>
    </Link>
  );
};

export default AccountBtn;
