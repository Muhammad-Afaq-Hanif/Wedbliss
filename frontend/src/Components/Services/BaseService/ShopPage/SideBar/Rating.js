import { useContext, useState, useEffect } from "react";
import { BaseServiceContext } from "../../../../../Providers/Services/BaseService/BaseServiceProvider";
const Rating = function ({ size = 5 }) {
  const { filters, setFilters } = useContext(BaseServiceContext);
  const [tempRating, setTempRating] = useState(filters.ratingAverage || 0);
  const [selectedRating, setSelectedRating] = useState(
    filters.ratingAverage || 0
  );

  useEffect(() => {
    setTempRating(filters.ratingAverage);
  }, [filters.ratingAverage]);

  const starsArray = new Array(size).fill(null);

  return (
    <div className="mt-[0px] mb-[20px]">
      <h1 htmlFor="price-range" className="block text-[black] font-[600] mb-2">
        Filter By Rating
      </h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        {starsArray.map((element, index) => (
          <span key={index}>
            <SingleStar
              ratingAverage={filters.ratingAverage}
              setFilters={setFilters}
              filters={filters}
              filled={selectedRating >= index + 1}
              tempFilled={index + 1 <= tempRating}
              tempRating={tempRating}
              setTempRating={setTempRating}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              index={index}
            />
          </span>
        ))}
        <span
          style={{
            fontSize: "15px",
            marginLeft: "15px",
            color: "#FCC419",
          }}
        >
          {tempRating > 0
            ? tempRating
            : filters.ratingAverage > 0
            ? filters.ratingAverage
            : ""}
        </span>
      </div>
    </div>
  );
};

const SingleStar = function ({
  ratingAverage,
  filters,
  setFilters,
  filled,
  index,
  tempRating,
  setTempRating,
  tempFilled,
  selectedRating,
  setSelectedRating,
}) {
  const handleClick = () => {
    setFilters({ ...filters, ratingAverage: index + 1, currentPage: 1 });
    setTempRating(index + 1);
    setSelectedRating(index + 1);
  };

  const handleMouseEnter = () => {
    setTempRating(index + 1);
  };

  const handleMouseLeave = () => {
    setTempRating(ratingAverage);
  };

  return (
    <span
      role="button"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {tempFilled || filled ? filledStar : emptyStar}
    </span>
  );
};

// FULL STAR
const filledStar = (
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
);

// EMPTY STAR
const emptyStar = (
  <svg
    style={{ height: "25px", width: "25px", cursor: "pointer" }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#FCC419"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default Rating;
