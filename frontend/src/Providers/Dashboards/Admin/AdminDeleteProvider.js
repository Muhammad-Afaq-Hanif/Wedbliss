import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
const adminDeleteContext = createContext();
const AdminDeleteProvider = ({ children }) => {
  const [serviceId, setServiceId] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async function () {
      console.log(serviceId);
      if (serviceId) {
        if (window.confirm("Are you sure you want to delete?")) {
          try {
            const response = await fetch(
              `http://127.0.0.1:8000/api/v1/dashboard/admin/${id}/${serviceId}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
              }
            );
            if (response.ok) {
              alert(`${id} Deleted Successfully`);
              navigate("/admindashboard");
            } else {
              alert("Failed to delete.");
            }
          } catch (error) {
            console.error("Error deleting service:", error);
            alert("An error occurred while deleting the service.");
          }
        } else {
          alert("Deletion Cancelled");
          setServiceId(0);
        }
      }
    };

    fetchData();
  }, [serviceId, id]);
  return (
    <adminDeleteContext.Provider value={{ serviceId, setServiceId }}>
      {children}
    </adminDeleteContext.Provider>
  );
};
export const useAdminDeleteContext = () => {
  return useContext(adminDeleteContext);
};

export default AdminDeleteProvider;
