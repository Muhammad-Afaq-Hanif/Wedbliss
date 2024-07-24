import { useContext } from "react";
import { BaseServiceContext } from "../../../../../Providers/Services/BaseService/BaseServiceProvider";

const Availability = function () {
  const { filters, setFilters } = useContext(BaseServiceContext);

  const handleAvailabilityChange = (isAvailable) => {
    setFilters({ ...filters, available: isAvailable, currentPage: 1 });
  };

  return (
    <div className="mt-[20px] mb-[-20px]">
      <label
        htmlFor="availability-filter"
        className="block text-[black] font-[600] mb-3"
      >
        Availability Filter
      </label>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <input
            id="available"
            type="radio"
            name="availability"
            value={true}
            checked={filters.available === true}
            onChange={() => handleAvailabilityChange(true)}
            className="mr-2 cursor-pointer"
          />
          <label
            htmlFor="available"
            className="text-sm font-medium text-gray-900"
          >
            Available
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="not-available"
            type="radio"
            name="availability"
            value={false}
            checked={filters.available === false}
            onChange={() => handleAvailabilityChange(false)}
            className="mr-2 cursor-pointer"
          />
          <label
            htmlFor="not-available"
            className="text-sm font-medium text-gray-900 text-[17px]"
          >
            Not Available
          </label>
        </div>
      </div>
    </div>
  );
};

export default Availability;
