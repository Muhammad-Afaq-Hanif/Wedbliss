import React, { createContext, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import LoadingDashboard from "../../../Components/Dashboards/Admin/LoadingDashboard";

const adminFetchContext = createContext();

const AdminFetchProvider = ({ children }) => {
  const [data, setData] = useState();
  const [totalRecords, setTotalRecords] = useState(0);
  const [fetching, setFetching] = useState(true); // Set initial fetching state to true
  const [filters, setFilters] = useState({
    name: null,
    currentPage: null || 1,
    recordsPerPage: null || 5,
    sortBy: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async function () {
      setFetching(true); // Set fetching state to true before fetching data
      const queryString = Object.entries({ ...filters })
        .filter(([_, value]) => value !== null) // Remove empty values
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      let response = await fetch(
        `http://127.0.0.1:8000/api/v1/dashboard/admin/${id}?${queryString}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      response = await response.json();
      setTotalRecords(response.result);
      setData(response.data);
      console.log(data);
      setFetching(false); // Set fetching state to false after fetching data
    };
    fetchData();
  }, [filters, id]);

  return (
    <adminFetchContext.Provider
      value={{ data, filters, setFilters, totalRecords }}
    >
      {fetching ? <LoadingDashboard /> : children}
    </adminFetchContext.Provider>
  );
};

export const useAdminFetchContext = () => {
  return useContext(adminFetchContext);
};

export default AdminFetchProvider;
