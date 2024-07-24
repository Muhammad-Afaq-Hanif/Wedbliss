import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const VendorSignUpContext = createContext();

const VendorSignUpProvider = function ({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lineOfBusiness, setLineOfBusiness] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [name, setName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [fetchData, setFetchData] = useState(false);
  const navigate = useNavigate();
  console.log(lineOfBusiness);
  useEffect(() => {
    const dataBody = {
      email,
      password,
      passwordConfirm,
      lineOfBusiness: lineOfBusiness || "Marriage Hall",
      contactNumber,
      name,
      brandName,
    };

    console.log("Fetch URL:", "http://127.0.0.1:8000/api/v1/vendor/signup");
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
          "http://127.0.0.1:8000/api/v1/vendor/signup",
          {
            // Added "http://"
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataBody),
          }
        );
        if (response.ok) {
          navigate("/addnewservice");
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
    <VendorSignUpContext.Provider
      value={{
        name,
        setName,
        brandName,
        setBrandName,
        contactNumber,
        setContactNumber,
        lineOfBusiness,
        setLineOfBusiness,
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
    </VendorSignUpContext.Provider>
  );
};

export default VendorSignUpProvider;
