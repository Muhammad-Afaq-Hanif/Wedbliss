import { useState, useEffect } from "react";
const useStats = function () {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [avgPrice, setAvgPrice] = useState(0);
  const [minCapacity, setMinCapacity] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(0);
  const [avgCapacity, setAvgCapacity] = useState(0);
  useEffect(() => {
    const fetchData = async function () {
      try {
        let response = await fetch(
          `http://127.0.0.1:8000/api/v1/marriage-halls/stats`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          response = await response.json();
          const {
            minPrice,
            maxPrice,
            avgPrice,
            minCapacity,
            maxCapacity,
            avgCapacity,
          } = response;

          setMinPrice(minPrice);
          setMaxPrice(maxPrice);
          setAvgPrice(Math.floor(avgPrice));
          setAvgCapacity(Number(Math.floor(avgCapacity)));
          setMinCapacity(minCapacity);
          setMaxCapacity(maxCapacity);
        }
      } catch (error) {
        console.log("Error in Stats");
      }
    };
    fetchData();
  }, []);
  return {
    minPrice,
    maxPrice,
    avgPrice,
    minCapacity,
    maxCapacity,
    avgCapacity,
  };
};

export default useStats;
