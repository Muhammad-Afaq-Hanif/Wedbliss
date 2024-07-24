import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const MarriageHallContext = createContext();

const MarriageHallProvider = ({ children }) => {
  const [hallsData, setHallsData] = useState([]);
  const [originalData, setOriginalData] = useState();
  // const [filteredHallsData, setFilteredHallsData] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    name: searchParams.get("name"),
    city: searchParams.get("city"),
    type: searchParams.get("type"),
    capacity: searchParams.get("capacity"),
    price: searchParams.get("price"),
    currentPage: searchParams.get("currentPage") || 1,
    recordsPerPage: searchParams.get("recordsPerPage") || 6,
    sortBy: searchParams.get("sortBy"),
  });

  useEffect(() => {
    const fetchMarriageHalls = async () => {
      if (filters.price) {
        filters["price[$lte]"] = filters.price;
        delete filters.price;
      }
      if (filters.capacity) {
        filters["capacity[$lte]"] = filters.capacity;
        delete filters.capacity;
      }
      const queryString = Object.entries({
        ...filters,
        // currentPage: 3,
      })
        .filter(([_, value]) => value !== null) // Remove empty values
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      console.log(`QueryString is ${queryString}`);
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/marriage-halls?${queryString}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseOriginal = await fetch(
          `http://127.0.0.1:8000/api/v1/marriage-halls`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const oData = await responseOriginal.json();
        if (oData.length) {
          setOriginalData(oData.length);
        }

        const data = await response.json();

        setHallsData(data);

        // setFilteredHallsData(data);
        // setTotalRecords(total);
      } catch (error) {
        console.error("Error fetching marriage halls:", error);
      }
    };

    fetchMarriageHalls();
  }, [filters]);

  return (
    <MarriageHallContext.Provider
      value={{
        data: hallsData,
        filters,
        setFilters,
        originalData,
      }}
    >
      {children}
    </MarriageHallContext.Provider>
  );
};

export default MarriageHallProvider;

//Object.entries ka concept samaj lo
//const obj = { foo: 'bar', baz: 42 };

// Using Object.entries()
// const entries = Object.entries(obj);
// console.log(entries);
// Output: [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]
