import { useContext } from "react";
import { MarriageHallContext } from "../../Providers/ServiceProvider";

const Pagination = function () {
  const { filters, originalData, data, setFilters } =
    useContext(MarriageHallContext);
  console.log("Halls Data ", data);
  console.log("CurrentPage ", filters.currentPage);
  console.log("Records ", filters.recordsPerPage);
  return (
    <div class="flex flex-1  px-4 py-3 mt-12 bg-white border-t border-gray-200 shadow-md sm:px-6">
      <div class=" sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div
          class="relative z-0 flex justify-between w-full -space-x-px rounded-md"
          aria-label="Pagination"
        >
          <button
            type="button"
            onClick={() => {
              if (filters.currentPage > 1) {
                setFilters({
                  ...filters,
                  currentPage: filters.currentPage - 1,
                });
              }
            }}
            className={
              filters.currentPage === 1
                ? "relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-l-md opacity-50 cursor-not-allowed "
                : "relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl   font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-r-md"
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="w-5 h-5"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>{" "}
            Previous Page
          </button>
          <div className="flex items-center">
            <select
              onChange={(event) => {
                setFilters({ ...filters, recordsPerPage: event.target.value });
              }}
              value={filters.recordsPerPage * 1}
              class="bg-gray-50 border border-[black] cursor-pointer text-gray-900 text-sm  focus:ring-[#007F73] focus:border-[#007F73] py-[6px] dark:bg-gray-700 dark:border-[#007F73] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4CCD99] dark:focus:border-[#4CCD99]"
            >
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={30}>30</option>
              <option value={90}>90</option>
              <option value={"all"}>All</option>
            </select>
            <h1>&nbsp; per Page</h1>
          </div>

          <button
            type="button"
            className={
              filters.currentPage * filters.recordsPerPage <= originalData
                ? "relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl   font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-r-md"
                : "relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50 sm:rounded-l-md opacity-50 cursor-not-allowed "
            }
            data-id="pagination-next"
            onClick={() => {
              if (filters.currentPage * filters.recordsPerPage <= originalData)
                setFilters({
                  ...filters,
                  currentPage: filters.currentPage + 1,
                });
            }}
          >
            Next Page
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="w-5 h-5"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
