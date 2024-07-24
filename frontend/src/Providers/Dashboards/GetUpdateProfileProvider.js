import React, { createContext, useContext, useEffect, useState } from "react";
import Loading from "../../Components/Services/BaseService/Loading";

const getUpdateProfileContext = createContext();

const GetUpdateProfileProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [photo, setPhoto] = useState("");
  const [fetching, setFetching] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetching(true);
        const response = await fetch(`http://127.0.0.1:8000/api/v1/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        setData(data.data);
        setFetching(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching the data.");
        setFetching(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (photo) {
      const updatePhoto = async () => {
        try {
          const formData = new FormData();
          formData.append("photo", photo);
          const response = await fetch(
            `http://127.0.0.1:8000/api/v1/me/update-photo`,
            {
              method: "PATCH",
              body: formData,
              credentials: "include",
            }
          );
          const dataFetch = await response.json();
          if (response.ok) {
            setData((prevData) => ({ ...prevData, photo: dataFetch.data }));
            alert("Photo updated successfully!");
          } else {
            alert("Failed to update photo.");
          }
        } catch (error) {
          console.error("Error updating photo:", error);
          alert("An error occurred while updating the photo.");
        }
      };

      updatePhoto();
    }
  }, [photo]);

  useEffect(() => {
    const updateData = async () => {
      if (clicked) {
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/api/v1/me/update-me`,
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
            alert("Profile updated successfully!");
          } else {
            alert("Failed to update profile.");
          }
        } catch (error) {
          console.error("Error updating data:", error);
          alert("An error occurred while updating the data.");
        } finally {
          setClicked(false);
        }
      }
    };

    updateData();
  }, [clicked, data]);

  return (
    <getUpdateProfileContext.Provider
      value={{ photo, setPhoto, data, setData, setClicked }}
    >
      {fetching ? <Loading /> : children}
    </getUpdateProfileContext.Provider>
  );
};

export const useGetUpdateProfileContext = () => {
  return useContext(getUpdateProfileContext);
};

export default GetUpdateProfileProvider;
