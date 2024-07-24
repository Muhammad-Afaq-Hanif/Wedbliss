import { useContext, useEffect, useState } from "react";

import useStats from "../../../../../Hooks/MarriageHall/useStats";
import { MarriageHallContext } from "../../../../../Providers/Services/MarriageHall/MarriageHallProvider";

const Capacity = function () {
  const { filters, setFilters } = useContext(MarriageHallContext);
  const { minCapacity, maxCapacity, avgCapacity } = useStats();

  console.log(maxCapacity);
  const [dummyCapacity, setDummyCapacity] = useState();
  useEffect(() => {
    setDummyCapacity(filters.capacity);
  }, [avgCapacity]);
  return (
    <div className="mt-[20px] mb-[20px]">
      {/* filter no  range slidder filtering by capacity */}

      <div class="mb-4 mt-[20px]">
        <label for="price-range" class="block text-[black] font-[600] mb-2">
          Filter By capacity
        </label>
        <input
          onChange={(event) => {
            setDummyCapacity(event.target.value);
          }}
          type="range"
          id="price-range"
          class="w-full accent-[#007F73] cursor-pointer"
          min={minCapacity}
          max={maxCapacity}
          value={dummyCapacity}
        />
      </div>
      <div class="flex justify-between text-gray-500">
        <span id="minPrice">{minCapacity}</span>
        <span id="maxPrice">{maxCapacity}</span>
      </div>
      <button
        onClick={() => {
          setFilters({ ...filters, capacity: dummyCapacity, currentPage: 1 });
        }}
        class="mt-5 tracking-wide font-semibold bg-[#007F73] text-gray-100 w-full py-4 rounded-lg hover:bg-[#4CCD99] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        <span class="ml-3">Apply Filter (${dummyCapacity})</span>
      </button>
    </div>
  );
};

export default Capacity;
