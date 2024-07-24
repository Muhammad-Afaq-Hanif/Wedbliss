import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleBaseContext = createContext();
const SingleBaseProvider = ({ children }) => {
  const { id, service } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/${service}/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching Data of Single Product Page:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <SingleBaseContext.Provider value={{ data, setData }}>
      {children}
    </SingleBaseContext.Provider>
  );
};

export default SingleBaseProvider;
