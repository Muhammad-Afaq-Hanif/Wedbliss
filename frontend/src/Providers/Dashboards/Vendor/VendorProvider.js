import React, { createContext, useContext, useEffect, useState } from "react";
import LoadingDashboard from "../../../Components/Dashboards/Admin/LoadingDashboard";

const vendorContext = createContext();
const VendorProvider = ({ children }) => {
  const [totalData, setTotalData] = useState();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchData = async function () {
      setFetching(true);
      let response = await fetch(
        `http://127.0.0.1:8000/api/v1/dashboard/vendor/totaldata`,
        {
          // Added "http://"
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
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
    <vendorContext.Provider value={{ totalData }}>
      {fetching ? <LoadingDashboard /> : children}
    </vendorContext.Provider>
  );
};
export const useVendorContext = () => {
  return useContext(vendorContext);
};
export default VendorProvider;
