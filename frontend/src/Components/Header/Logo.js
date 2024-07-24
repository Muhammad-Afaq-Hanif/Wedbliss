import { Link } from "react-router-dom";
const Logo = function () {
  return (
    <div className="w-[100px]">
      <Link to="/">
        <img
          className="cursor-pointer"
          src="/images/header/WEDBLISS.png"
          alt="WedBliss Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
