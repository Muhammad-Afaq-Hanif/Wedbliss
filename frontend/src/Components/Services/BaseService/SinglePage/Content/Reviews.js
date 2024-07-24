import { useContext } from "react";
import SingleReview from "./SingleReview";
import { ReviewContext } from "../../../../../Providers/Services/BaseService/ReviewProvider";
import { SingleBaseContext } from "../../../../../Providers/Services/BaseService/SingleBaseProvider";

const Reviews = function () {
  const { review } = useContext(ReviewContext);
  const { data } = useContext(SingleBaseContext);
  return (
    <>
      {data.reviews && data.reviews.length > 0 && (
        <div className="border rounded-md border-[black] dark:border-neutral-600/80 mt-[30px]">
          <div className="p-[20px]">
            {data.reviews.map((review) => (
              <SingleReview key={review._id} review={review} />
            ))}
            {/* <button className="bg-[#007F73] text-white py-[10px] px-[20px]">
              Show more Reviews
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
