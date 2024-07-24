import { Link } from "react-router-dom";

const ExploreTheMarket = function () {
  return (
    <div class=" px-[200px] mt-[100px]">
      <h1 class="text-center  text-[30px] font-semibold text-[#132743] ">
        Our Services
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 py-8 ">
        <Link to={"/services/marriage-hall"}>
          <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32 hover:cursor-pointer hover:bg-[#4CCD99] ">
            <div class="flex gap-2 items-center ">
              <img
                class="mx-auto"
                src="/images/Home/venues.svg "
                alt="wedding VENUES"
              />
              <h1 class="text-center mt-[10px]">WEDDING VENUES</h1>
            </div>
          </div>
        </Link>
        <Link to={"/services/photography"}>
          <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32 hover:cursor-pointer hover:bg-[#4CCD99]">
            <div class="flex gap-2 items-center">
              <img
                class="mx-auto"
                src="/images/Home/photographer.svg"
                alt="PHOTOGRAPHERS"
              />
              <h1 class="text-center mt-[10px]">PHOTOGRAPHERS</h1>
            </div>
          </div>
        </Link>
        <Link to={"/services/parlor"}>
          <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32 hover:cursor-pointer hover:bg-[#4CCD99]">
            <div class="flex gap-2 items-center">
              <img
                class="mx-auto"
                src="/images/Home/parlor.svg"
                alt="MAKEUP ARTISTS"
              />
              <h1 class="text-center mt-[10px]">MAKEUP ARTISTS</h1>
            </div>
          </div>
        </Link>
        <Link to={"/services/catering"}>
          <div class="flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32 hover:cursor-pointer hover:bg-[#4CCD99]">
            <div class="flex gap-2 items-center">
              <img
                class="mx-auto"
                src="/images/Home/catering.svg"
                alt="CATERING"
              />
              <h1 class="text-center mt-[10px]">CATERING</h1>
            </div>
          </div>
        </Link>
        <Link to={"/services/decoration"}>
          <div class="md:col-start-2 lg:col-auto flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32 hover:cursor-pointer hover:bg-[#4CCD99]">
            <div class="flex gap-2 items-center">
              <img
                class="mx-auto"
                src="/images/Home/decoration.svg"
                alt="DECOR"
              />
              <h1 class="text-center mt-[10px]">DECOR</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExploreTheMarket;
