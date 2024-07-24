import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const LoginContext = createContext();
const LoginProvider = function ({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetchData, setFetchData] = useState(false);
  const { role } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const dataBody = { email, password };

    console.log("Fetch URL:", `http://127.0.0.1:8000/api/v1/${role}/login`);
    try {
      const LoginFunc = async function () {
        if (fetchData === false) {
          return;
        }
        console.log("Click kia hai tum ney Login button per");
        const response = await fetch(
          ` http://127.0.0.1:8000/api/v1/${role}/login`,
          {
            // Added "http://"
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataBody),
            credentials: "include",
          }
        );
        if (response.ok) {
          navigate("/services/marriage-hall");
          alert("Login Successful");
          console.log("User Login up successfully");
          // Optionally, you can redirect the user or perform other actions after successful signup
        } else {
          const errorData = await response.json();
          console.log(errorData);
          if (errorData.message === "Incorrect password") {
            alert("Incorrect Password");
          }
          if (errorData.message === "User not exist") {
            alert("User not Exist");
          }
        }
        setFetchData(false);
      };
      LoginFunc();
    } catch (err) {
      console.error(`Fetching Failed ${err}`);
    }
  }, [fetchData]);
  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        fetchData,
        setFetchData,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
