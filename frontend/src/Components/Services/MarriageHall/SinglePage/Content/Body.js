import Content from "./Content";
import SideBar from "../SideBar/index";

const Body = function () {
  return (
    <div className="max-w-[1200px] mx-auto py-16">
      <div className="grid grid-cols-[65%_30%] gap-[5%] ">
        <Content />
        <SideBar />
      </div>
    </div>
  );
};

export default Body;
