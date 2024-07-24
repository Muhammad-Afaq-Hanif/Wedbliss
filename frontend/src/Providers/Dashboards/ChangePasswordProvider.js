import React, { createContext, useContext, useEffect, useState } from "react";
import Loading from "../../Components/Services/BaseService/Loading";

const changePasswordContext = createContext();

const ChangePasswordProvider = ({ children }) => {
  const [data, setData] = useState({});
  //   const [fetching, setFetching] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updatePassword = async () => {
      if (clicked) {
        // setFetching(true);
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/api/v1/me/update-password`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
              credentials: "include",
            }
          );

          if (response.ok) {
            alert("Password updated successfully!");
          } else {
            alert("Failed to update Password.");
          }
        } catch (error) {
          console.error("Error updating data:", error);
          alert("An error occurred while updating the data.");
        } finally {
          setClicked(false);
          //   setFetching(false);
        }
      }
    };

    updatePassword();
  }, [clicked, data]);

  return (
    <changePasswordContext.Provider value={{ data, setData, setClicked }}>
      {children}
    </changePasswordContext.Provider>
  );
};

export const useChangePasswordContext = () => {
  return useContext(changePasswordContext);
};

export default ChangePasswordProvider;
