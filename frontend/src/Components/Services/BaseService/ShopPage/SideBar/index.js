// import Capacity from "./Capacity";
import City from "./City";
import Price from "./Price";
import ResetFilters from "./ResetFilters";
import Search from "./Search";
import Rating from "./Rating";
import Availability from "./Availability";

const ServicesSideBar = function () {
  return (
    <div className="mt-[30px]">
      <Search />
      <Availability />
      <Price />
      <Rating />
      <City />
      {/* <Capacity /> */}
      <ResetFilters />
      <div className="mt-[20px] mb-[20px]"></div>
    </div>
  );
};

export default ServicesSideBar;
