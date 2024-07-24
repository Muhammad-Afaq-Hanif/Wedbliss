import { useContext } from "react";
import { BaseServiceContext } from "../../../../../Providers/Services/BaseService/BaseServiceProvider";

const ResetFilters = function () {
  const { filters, setFilters } = useContext(BaseServiceContext);
  console.log("Before reset:", filters);
  const handleReset = function () {
    setFilters({
      ...filters,
      name: null,
      city: null,
      type: null,
      // "capacity[$lte]": null,
      "price[$lte]": null,
      "ratingAverage[$lte]": null,
      currentPage: 1,
      recordsPerPage: 6,
    });
  };
  console.log("After reset:", filters);

  return (
    <div>
      <button
        onClick={handleReset}
        class="mt-5 tracking-wide font-semibold bg-[#EE4266] text-gray-100 w-full py-4 rounded-lg hover:bg-[##EE4266] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        <span class="ml-3">Reset Filters</span>
      </button>
    </div>
  );
};

export default ResetFilters;
