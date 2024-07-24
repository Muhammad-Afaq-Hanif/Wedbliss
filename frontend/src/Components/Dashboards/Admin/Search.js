import React from "react";
import { GrSearch } from "react-icons/gr";
import { useAdminFetchContext } from "../../../Providers/Dashboards/Admin/AdminFetchProvier";

const Search = () => {
  const { filters, setFilters } = useAdminFetchContext();
  return (
    <div className="rounded-xl shadow-lg mb-6 px-6 py-3 bg-white">
      <div className="grid grid-cols-[95%_5%] items-center">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            className="w-[100%] text-[16px] outline-none"
            autoFocus={true}
            placeholder="Search Here... (Press Enter)"
            value={filters.name}
            type="text"
            onChange={(event) => {
              setFilters({
                ...filters,
                name: event.target.value,
                currentPage: 1,
              });
            }}
          />
        </form>
        <div className="text-[20px] ">
          <GrSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
