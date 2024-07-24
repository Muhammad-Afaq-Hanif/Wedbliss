import { useContext, useEffect, useRef } from "react";
import { BaseServiceContext } from "../../../../../Providers/Services/BaseService/BaseServiceProvider";
import { useParams } from "react-router-dom";
const Search = function () {
  const { service } = useParams();
  const formattedString = service
    .replace(/-/g, " ")
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });

  const { filters, setFilters } = useContext(BaseServiceContext);

  //For Protecting Re Rendering
  const data = useRef("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {/* Filter no 1 Searching */}
      <input
        required
        onChange={(event) => {
          data.current = event.target.value;
        }}
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        placeholder={`Search ${formattedString} Service`}
      />

      <button
        onClick={() => {
          if (data.current !== "") {
            setFilters({ ...filters, name: data.current, currentPage: 1 });
          }
        }}
        class="mt-5 tracking-wide font-semibold bg-[#007F73] text-gray-100 w-full py-4 rounded-lg hover:bg-[#4CCD99] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        <span class="ml-3">Search</span>
      </button>
    </form>
  );
};

export default Search;
