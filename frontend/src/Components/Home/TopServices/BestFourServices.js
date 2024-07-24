import { Link } from "react-router-dom";
import SingleService from "../../../Components/Services/BaseService/ShopPage/SingleService";

const BestFourServices = function ({ type, data }) {
  let topFour = data && data.slice(0, 4);
  return (
    <div class="max-w-[1400px] mx-auto pb-[70px]">
      <div class="grid grid-cols-[88%_12%] items-center">
        <div class="flex">
          <h1 class="text-[#132743] text-[30px] font-semibold text-center">
            Find the Best &nbsp;{" "}
          </h1>
          <span class="text-[#007F73] text-[30px] font-semibold">
            {type} &nbsp;
          </span>
          <span class="text-[#132743] text-[30px] font-semibold">
            Service in Pakistan
          </span>
        </div>
        <div class="grid grid-cols-2 gap-1 items-center text-[#007F73] text-[16px] font-[700] hover:text-[#007F73] cursor-pointer">
          <Link to={`/services/${type}`}>
            <h1 class="float-left">View All</h1>
          </Link>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div class="grid grid-cols-4 mt-[20px] gap-[15px]">
        {topFour &&
          topFour.map((element) => {
            return (
              <SingleService
                singleServiceData={element}
                key={element.id}
                type={type}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BestFourServices;
