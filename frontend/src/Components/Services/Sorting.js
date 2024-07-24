import { useContext } from "react";
import { MarriageHallContext } from "../../Providers/Services/MarriageHall/MarriageHallProvider";

const Sorting = function () {
  const { filters, setFilters } = useContext(MarriageHallContext);
  return (
    <div className="">
      <div className="mt-[20px] mb-[20px]">
        <select
          value={filters.sortBy}
          onChange={(event) => {
            setFilters({ ...filters, sortBy: event.target.value });
          }}
          class="bg-gray-50 border border-[black] cursor-pointer text-gray-900 text-sm  focus:ring-[#007F73] focus:border-[#007F73] block w-full p-2.5 dark:bg-gray-700 dark:border-[#007F73] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4CCD99] dark:focus:border-[#4CCD99]"
        >
          {/* <option selected>RELEVANCE</option> */}
          <option value="">RELEVANCE</option>
          <option value="-price">HIGHEST PRICE</option>
          <option value="price">LOWEST PRICE</option>
          <option value="-rating">RATING</option>
          <option value="-capacity">CAPACITY</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
