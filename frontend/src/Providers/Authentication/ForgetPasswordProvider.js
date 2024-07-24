import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ForgetPasswordContext = createContext();

const ForgetPasswordProvider = function ({ children }) {
  const { role } = useParams();
  const [email, setEmail] = useState("");
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const dataBody = { email };

    console.log(
      "Fetch URL:",
      `http://127.0.0.1:8000/api/v1/${role}/forget-password`
    );
    try {
      const ResetFunc = async function () {
        if (fetchData === false) {
          return;
        }
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/${role}/forget-password`,
          {
            // Added "http://"
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataBody),
          }
        );
        if (response.ok) {
          alert("Email Send Successfully kindly Check your Email");
          console.log("Email Send Successfully kindly Check your Email");
        } else {
          const errorData = await response.json();
          console.log(errorData);
          alert("User not Exist");
        }
        setFetchData(false);
      };
      ResetFunc();
    } catch (err) {
      console.error(`Fetching Failed ${err}`);
    }
  }, [fetchData]);
  return (
    <ForgetPasswordContext.Provider
      value={{ email, setEmail, fetchData, setFetchData }}
    >
      {children}
    </ForgetPasswordContext.Provider>
  );
};

export default ForgetPasswordProvider;
