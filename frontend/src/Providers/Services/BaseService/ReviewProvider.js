import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const ReviewContext = createContext();

const ReviewProvider = function ({ children }) {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [fetched, setFetched] = useState(false);

  const { id, service } = useParams();

  useEffect(() => {
    const submitReview = async () => {
      try {
        if (!fetched) return;

        if (!review || !rating) {
          setFetched(false);
          throw new Error("Please select a rating and enter a review.");
        }

        const data = { rating: Number(rating), review };
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/${service}/${id}/review`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          throw new Error("Error submitting review. Please try again.");
        } else {
          alert("Thanks for your review!");
          setFetched(false); // Reset fetched state after successful submission
        }
      } catch (err) {
        console.error(err);
        setFetched(false);
        alert(err);
      }
    };

    submitReview();
  }, [fetched, rating, review, id]);

  return (
    <ReviewContext.Provider
      value={{
        fetched,
        setFetched,
        rating,
        setRating,
        review,
        setReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
