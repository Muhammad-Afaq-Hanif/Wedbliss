import { createContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Loading from "../../../Components/Services/BaseService/Loading";

export const BaseServiceContext = createContext();

const BaseServiceProvider = ({ children }) => {
  console.log("Hi i am runing");
  const { service: initialService } = useParams();

  const [service, setService] = useState(initialService);
  const [fetching, setFetching] = useState(false); // State to track fetching status
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    name: searchParams.get("name"),
    city: searchParams.get("city"),
    type: searchParams.get("type"),
    capacity: searchParams.get("capacity"),
    price: searchParams.get("price"),
    ratingAverage: searchParams.get("ratingAverage"),
    currentPage: searchParams.get("currentPage") || 1,
    recordsPerPage: searchParams.get("recordsPerPage") || 6,
    sortBy: searchParams.get("sortBy"),
    available: searchParams.get("available"),
  });

  useEffect(() => {
    setService(initialService);
    setFilters({
      name: searchParams.get("name"),
      city: searchParams.get("city"),
      type: searchParams.get("type"),
      capacity: searchParams.get("capacity"),
      price: searchParams.get("price"),
      ratingAverage: searchParams.get("ratingAverage"),
      currentPage: searchParams.get("currentPage") || 1,
      recordsPerPage: searchParams.get("recordsPerPage") || 6,
      sortBy: searchParams.get("sortBy"),
      available: searchParams.get("available"),
    });
  }, [initialService]);

  useEffect(() => {
    setFetching(true); // Set fetching state to true before fetching data
    const fetchData = async () => {
      if (filters.price) {
        filters["price[$lte]"] = filters.price;
        delete filters.price;
      }
      if (filters.capacity) {
        filters["capacity[$lte]"] = filters.capacity;
        delete filters.capacity;
      }
      if (filters.ratingAverage) {
        filters["ratingAverage[$lte]"] = filters.ratingAverage;
        delete filters.ratingAverage;
      }

      const queryString = Object.entries({ ...filters })
        .filter(([_, value]) => value !== null) // Remove empty values
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      console.log(`QueryString is ${queryString}`);

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/${service}?${queryString}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setData(data.data);
        setOriginalData(data.totalRecords);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setFetching(false); // Set fetching state to false after data fetching completes
      }
    };

    fetchData();
  }, [filters, service]);

  return (
    <BaseServiceContext.Provider
      value={{
        service,
        setService,
        rating: filters.ratingAverage,
        data,
        filters,
        setFilters,
        originalData,
      }}
    >
      {fetching ? <Loading /> : children}
    </BaseServiceContext.Provider>
  );
};

export default BaseServiceProvider;
