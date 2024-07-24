const SingleReview = function ({ review }) {
  // means three filled stars
  const filledArray = Array(Math.floor(review.rating)).fill(null);
  const unfilledArray = Array(5 - Math.floor(review.rating)).fill(null);

  return (
    <div>
      <div className="grid grid-cols-[10%_85%] gap-[1%] items-center pb-[15px] mb-[25px] border-b-2 border-b-gray-300">
        <div>
          <img
            className="h-[60px] w-[60px] rounded-[50%]"
            src={review.user.photo}
            alt="profile"
          />
        </div>
        <div>
          <h2 className="text-[18px] font-[800] text-[black]">
            {review.user.name}
          </h2>
          {/* Suppose there is 3 star Rating now I want three filled stars and 2 unfilled */}
          <div className="grid grid-cols-[4%_4%_4%_4%_4%] gap-[1px]">
            {filledArray.map((_, index) => (
              <span key={`filled-${index}`}>
                <svg
                  role="button"
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#FCC419"
                  stroke="#FCC419"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            ))}
            {unfilledArray.map((_, index) => (
              <span key={`unfilled-${index}`}>
                <svg
                  style={{
                    height: "25px",
                    width: "25px",
                    cursor: "pointer",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#FCC419"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </span>
            ))}
          </div>
          <h2>{review.review}</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
