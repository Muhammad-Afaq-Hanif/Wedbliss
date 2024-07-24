import React, { createContext, useContext, useEffect, useState } from "react";
import LoadingDashboard from "../../../Components/Dashboards/Admin/LoadingDashboard";

const adminContext = createContext();
const AdminProvider = ({ children }) => {
  const [totalData, setTotalData] = useState();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchData = async function () {
      setFetching(true);
      let response = await fetch(
        `http://127.0.0.1:8000/api/v1/dashboard/admin/totaldata`,
        {
          // Added "http://"
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      response = await response.json();
      setTotalData(response.data);
      console.log(totalData);
      setFetching(false);
    };
    fetchData();
  }, []);
  return (
    <adminContext.Provider value={{ totalData }}>
      {fetching ? <LoadingDashboard /> : children}
    </adminContext.Provider>
  );
};
export const useAdminContext = () => {
  return useContext(adminContext);
};
export default AdminProvider;
