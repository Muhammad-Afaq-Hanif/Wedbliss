const Type = function () {
  return (
    <div>
      {/* Marriage Hall type */}
      <label for="price-range" class="block text-[black] font-[600] mb-2">
        Filter By Type
      </label>
      <div className="grid grid-cols-2 gap-[5%] mb-[15px]">
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="w-4 h-4 accent-[#4CCD99] text-[#4CCD99] bg-gray-100 border-gray-300 rounded focus:ring-[#4CCD99] dark:focus:ring-[#4CCD99] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-checkbox-1"
            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Hall
          </label>
        </div>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            checked
            id="bordered-checkbox-2"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="w-4 h-4 text-[#4CCD99]  accent-[#4CCD99] bg-gray-100 border-gray-300 rounded focus:ring-[#4CCD99] dark:focus:ring-[#4CCD99] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-checkbox-2"
            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Outdoor
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[5%]">
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="w-4 h-4 text-[#4CCD99]  accent-[#4CCD99] bg-gray-100 border-gray-300 rounded focus:ring-[#4CCD99] dark:focus:ring-[#4CCD99] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-checkbox-1"
            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Marquee
          </label>
        </div>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            checked
            id="bordered-checkbox-2"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="w-4 h-4 text-[#4CCD99]  accent-[#4CCD99] bg-gray-100 border-gray-300 rounded focus:ring-[#4CCD99] dark:focus:ring-[#4CCD99] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-checkbox-2"
            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Other
          </label>
        </div>
      </div>
    </div>
  );
};

export default Type;
