import Capacity from "./Capacity";
import City from "./City";
import Price from "./Price";
import ResetFilters from "./ResetFilters";
import Search from "./Search";

const ServicesSideBar = function () {
  return (
    <div className="mt-[30px]">
      <Search />
      <Price />
      <City />
      <Capacity />
      <ResetFilters />
      <div className="mt-[20px] mb-[20px]"></div>
    </div>
  );
};

export default ServicesSideBar;
