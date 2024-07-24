import React, { createContext, useState, useEffect, useContext } from "react";

const adminFetchVendorContext = createContext();
const AdminFetchVendorProvider = ({ children }) => {
  const [vendors, setVendors] = useState();

  useEffect(() => {
    const fetchData = async function () {
      let response = await fetch(
        `http://127.0.0.1:8000/api/v1/dashboard/admin/vendors`,
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
      setVendors(response.data);
      console.log(vendors);
    };
    fetchData();
  }, []);
  return (
    <adminFetchVendorContext.Provider value={{ vendors }}>
      {children}
    </adminFetchVendorContext.Provider>
  );
};
export const useAdminFetchVendorContext = () => {
  return useContext(adminFetchVendorContext);
};

export default AdminFetchVendorProvider;
