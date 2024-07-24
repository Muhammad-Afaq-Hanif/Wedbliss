import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
export const SignUpContext = createContext();
const SignupProvider = function ({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [fetchData, setFetchData] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const dataBody = { email, password, passwordConfirm };

    console.log("Fetch URL:", "http://127.0.0.1:8000/api/v1/users/signup");
    try {
      const SignUpFunc = async function () {
        if (fetchData === false) {
          return;
        }
        if (password !== passwordConfirm) {
          console.log("Passwords do not match");
          alert("Passwords do not match");
          setFetchData(false);
          return;
        }
        console.log("Click kia hai tum ney signup button per");
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/users/signup",
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
          navigate("/services/marriage-hall");
          alert("User signed up successfully");
        } else {
          const errorData = await response.json();
          console.log(errorData.message);
          alert("Email Already In Use Kindly Use another Email or Login Now"); //sirf yehe error rahta tha
        }
        setFetchData(false);
      };
      SignUpFunc();
    } catch (err) {
      console.error(
        `Sign Up kerte waqt Data Fetching mai Error aya hai ${err}`
      );
    }
  }, [fetchData]);
  return (
    <SignUpContext.Provider
      value={{
        email,
        password,
        passwordConfirm,
        setEmail,
        setPassword,
        setPasswordConfirm,
        setFetchData,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export default SignupProvider;
