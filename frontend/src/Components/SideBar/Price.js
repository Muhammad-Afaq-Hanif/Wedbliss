import { useContext, useEffect, useState } from "react";
import useStats from "../../Providers/useStats";
import { MarriageHallContext } from "../../Providers/Services/MarriageHall/MarriageHallProvider";

const Price = function () {
  const { filters, setFilters } = useContext(MarriageHallContext);
  const { minPrice, maxPrice, avgPrice } = useStats();
  console.log(minPrice, maxPrice, avgPrice);
  const [dummyPrice, setDummyPrice] = useState();

  useEffect(() => {
    setDummyPrice(avgPrice);
  }, [avgPrice]);

  return (
    <div className="mt-[40px] mb-[20px]">
      {/* filter no 2 range slidder filtering by price */}

      <div class="mb-[5px] ">
        <label class="block text-[black] font-[600] mb-2">Price Range</label>
        <input
          type="range"
          class="w-full accent-[#007F73] cursor-pointer"
          min={minPrice}
          max={maxPrice}
          value={dummyPrice}
          onChange={(event) => {
            setDummyPrice(event.target.value);
          }}
        />
      </div>
      <div class="flex justify-between text-gray-500">
        <span id="minPrice">${minPrice}</span>
        <span id="maxPrice">${maxPrice}</span>
      </div>
      <button
        onClick={() => {
          setFilters({ ...filters, price: dummyPrice, currentPage: 1 });
        }}
        class="mt-5 tracking-wide font-semibold bg-[#007F73] text-gray-100 w-full py-4 rounded-lg hover:bg-[#4CCD99] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        <span class="ml-3">Apply Filter (${dummyPrice})</span>
      </button>
    </div>
  );
};

export default Price;
