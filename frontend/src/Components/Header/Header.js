import { Link } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";
import ListBusinessBtn from "./ListBusinessBtn";
import AccountBtn from "./AccountBtn";

const Header = function () {
  return (
    <div>
      <header className="grid grid-cols-[20%_58%_15%_5%] max-w-[100%] items-center fixed top-0 left-0 right-0 bg-white z-50 border-b-4 border-[#007F73] ">
        <Logo />
        <Menu />
        <ListBusinessBtn />
        <AccountBtn />
      </header>
    </div>
  );
};

export default Header;
