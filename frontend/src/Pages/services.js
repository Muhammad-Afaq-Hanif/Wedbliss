import ServicesSideBar from "../Components/SideBar/ServicesSideBar";
import Sorting from "../Components/Services/Sorting";
import Pagination from "../Components/Services/Pagination";
import MarriageHallServices from "../Components/Services/MarriageHallServices";
const Services = function () {
  return (
    <div class="max-w-[1400px] mx-auto pt-[150px]">
      <div className="grid grid-cols-[25%_70%] gap-[5%]">
        <ServicesSideBar />
        <div>
          <div className=" mt-[-40px] grid grid-cols-[30%_70%] w-[300px] align-middle items-center">
            <label class="block text-[#007F73] text-[20px] font-[600] ">
              Sort By:
            </label>
            <Sorting />
          </div>

          <div class="grid grid-cols-3 mt-[10px] gap-[25px]">
            <MarriageHallServices />
          </div>

          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
