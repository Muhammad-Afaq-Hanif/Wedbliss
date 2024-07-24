import ServicesSideBar from "../../../Components/Services/BaseService/ShopPage/SideBar/index";
import Sorting from "../../../Components/Services/BaseService/ShopPage/Sorting";
import Pagination from "../../../Components/Services/BaseService/ShopPage/Pagination";
import BaseServiceComponent from "../../../Components/Services/BaseService/ShopPage/index";
import BaseServiceProvider from "../../../Providers/Services/BaseService/BaseServiceProvider";
import TotalRecords from "../../../Components/Services/BaseService/ShopPage/TotalRecords";
const BaseServiceShop = function () {
  return (
    <BaseServiceProvider>
      <div class="max-w-[1400px] mx-auto pt-[150px]">
        <div className="grid grid-cols-[25%_70%] gap-[5%]">
          <ServicesSideBar />
          <div>
            <div className="grid grid-cols-2 align-middle ">
              <div className=" mt-[-40px] grid grid-cols-[30%_70%] w-[300px] align-middle items-center ">
                <label class="block text-[#007F73] text-[20px] font-[600] ">
                  Sort By:
                </label>
                <Sorting />
              </div>
              <div className="grid justify-items-end">
                <TotalRecords />
              </div>
            </div>
            <div class="grid grid-cols-3 mt-[10px] gap-[25px]">
              <BaseServiceComponent />
            </div>

            <div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </BaseServiceProvider>
  );
};

export default BaseServiceShop;
