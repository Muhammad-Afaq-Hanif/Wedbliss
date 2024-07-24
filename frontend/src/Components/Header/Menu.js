import { NavLink } from "react-router-dom";

const Menu = function () {
  return (
    <div className="mx-[10px]">
      <menu className="">
        <NavLink
          className="px-[12px] text-[18px] hover:border-b-[4px] border-b-[#007F73] p-[13px]"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="px-[12px] text-[18px] hover:border-b-[4px] border-b-[#007F73] p-[13px]"
          to="/services/marriage-hall"
        >
          Marriage Halls
        </NavLink>
        <NavLink
          className="px-[12px] text-[18px] hover:border-b-[4px] border-b-[#007F73] p-[13px]"
          to="/services/photography"
        >
          Photographers
        </NavLink>
        <NavLink
          className="px-[12px] text-[18px] hover:border-b-[4px] border-b-[#007F73] p-[13px]"
          to="/services/parlor"
        >
          Parlor
        </NavLink>
        <NavLink
          className="px-[12px] text-[18px] hover:border-b-[4px] border-b-[#007F73] p-[13px]"
          to="/services/decoration"
        >
          Decoration
        </NavLink>
        <NavLink
          className="px-[12px] text-[18px] hover:border-b-[4px] border-b-[#007F73] p-[13px]"
          to="/services/catering"
        >
          Catering
        </NavLink>
        <NavLink
          className="px-[12px] text-[18px] hover:border-b-[4px] border-b-[#007F73] p-[13px]"
          to="/services/invitation-card"
        >
          E-Invites
        </NavLink>
      </menu>
    </div>
  );
};

export default Menu;
