import { useContext } from "react";

import Rating from "./Rating";
import { ReviewContext } from "../../../../../Providers/Services/BaseService/ReviewProvider";

const ReviewForm = function () {
  const { setFetched, review, setReview } = useContext(ReviewContext);
  return (
    <div class="border rounded-md border-[black] dark:border-neutral-600/80 mt-[30px]">
      <div className="p-[20px]">
        <h1 className="text-center text-[26px] font-[800] text-gray-600">
          Rate your Experience
        </h1>
        <Rating />
        <form
          className="mt-[15px]"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <textarea
            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            placeholder="Tell Us about Your Experience"
            required
            value={review}
            onChange={(event) => {
              setReview(event.target.value);
            }}
          ></textarea>
          <button
            onClick={() => {
              setFetched(true);
            }}
            class="mt-5 tracking-wide font-semibold bg-[#007F73] text-gray-100 w-full py-4 rounded-lg hover:bg-[#4CCD99] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <span class="ml-3">Submit Review</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
