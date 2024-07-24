import React from "react";
import { useAddNewServiceContext } from "../../../../Providers/Services/BaseService/AddNewServiceProvider";
import { IoImageOutline } from "react-icons/io5";

const Base = () => {
  const {
    servicePrice,
    setServicePrice,
    discountedPrice,
    setDiscountedPrice,
    serviceCity,
    setServiceCity,
    serviceDescription,
    setServiceDescription,
    setServiceImageCover,
    serviceSummary,
    setServiceSummary,
    serviceAvailability,
    setServiceAvailability,
  } = useAddNewServiceContext();
  return (
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
      <div>
        <label className="text-black dark:text-gray-200">Price</label>
        <input
          value={servicePrice}
          onChange={(event) => setServicePrice(Number(event.target.value))}
          required
          type="Number"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
        />
      </div>
      <div>
        <label className="text-black dark:text-gray-200">
          Discounted Price
        </label>
        <input
          value={discountedPrice}
          onChange={(event) => setDiscountedPrice(Number(event.target.value))}
          required
          type="Number"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
        />
      </div>
      <div>
        <label className="text-black dark:text-gray-200">City</label>
        <select
          value={serviceCity}
          onChange={(event) => setServiceCity(event.target.value)}
          required
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
        >
          <option value="">Select a city</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Multan">Multan</option>
          <option value="Hafizabad">Hafizabad</option>
        </select>
      </div>
      <div>
        <label className="text-black dark:text-gray-200">
          Service Description
        </label>
        <textarea
          value={serviceDescription}
          onChange={(event) => setServiceDescription(event.target.value)}
          required
          type="textarea"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-white">Image</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-black border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <IoImageOutline className="mx-auto h-12 w-12 text-black" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-[-20px]">
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-[#007F73] hover:text-[#007F73] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    onChange={(event) =>
                      setServiceImageCover(event.target.files[0])
                    }
                    type="file"
                  />
                </label>
              </div>
              <p className="text-xs text-black">PNG, JPG, GIF up to 10 MB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <label className="text-black dark:text-gray-200">Service Summary</label>
        <textarea
          value={serviceSummary}
          onChange={(event) => setServiceSummary(event.target.value)}
          required
          type="textarea"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
        ></textarea>
      </div>
      <div>
        <label className="text-black dark:text-gray-200">Availability</label>
        <select
          value={serviceAvailability}
          onChange={(event) => setServiceAvailability(event.target.value)}
          required
          type="text"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
        >
          <option selected>Availability</option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>
    </div>
  );
};

export default Base;
