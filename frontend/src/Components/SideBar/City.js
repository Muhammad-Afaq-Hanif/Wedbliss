import { useContext } from "react";
import { MarriageHallContext } from "../../Providers/Services/MarriageHall/MarriageHallProvider";

const City = function () {
  const { filters, setFilters } = useContext(MarriageHallContext);
  return (
    <div className="mt-[20px] mb-[20px]">
      <label for="price-range" class="block text-[black] font-[600] mb-2">
        Filter By City
      </label>
      {/* Filter no 3 City */}
      <select
        onChange={(event) => {
          setFilters({ ...filters, city: event.target.value, currentPage: 1 });
        }}
        class="bg-gray-50 border border-[#4CCD99] cursor-pointer text-gray-900 text-sm rounded-lg focus:ring-[#4CCD99] focus:border-[#4CCD99] block w-full p-2.5 dark:bg-gray-700 dark:border-[#4CCD99] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4CCD99] dark:focus:border-[#4CCD99]"
      >
        <option disabled selected>
          Choose City
        </option>
        <option value="Multan">Multan</option>
        <option value="Lahore">Lahore</option>
        <option value="Hafizabad">Hafizabad</option>
        <option value="Islamabad">Islamabad</option>
      </select>
    </div>
  );
};

export default City;
