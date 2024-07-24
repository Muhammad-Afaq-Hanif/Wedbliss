import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ResetPasswordContext = createContext();

const ResetPassowrdProvider = function ({ children }) {
  const { token, role } = useParams();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [fetchData, setFetchData] = useState(false);
  useEffect(() => {
    const dataBody = { password, passwordConfirm };

    console.log(
      "Fetch URL:",
      `http://127.0.0.1:8000/api/v1/${role}/reset-password/${token}`
    );
    try {
      const ResetFunc = async function () {
        if (fetchData === false) {
          return;
        }
        if (password !== passwordConfirm) {
          console.log("Passwords do not match");
          alert("Passwords do not match ");
          setFetchData(false);
          return;
        }
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/${role}/reset-password/${token}`,
          {
            // Added "http://"
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataBody),
          }
        );
        if (response.ok) {
          alert("Password Reset Successfully");
          console.log("Password Reset Successfully");
        } else {
          const errorData = await response.json();
          console.log(errorData);
          alert("Invalid Token || Weak Password");
        }
        setFetchData(false);
      };
      ResetFunc();
    } catch (err) {
      console.error(`Fetching Failed ${err}`);
    }
  }, [fetchData]);
  return (
    <ResetPasswordContext.Provider
      value={{
        password,
        passwordConfirm,
        setFetchData,
        setPassword,
        setPasswordConfirm,
      }}
    >
      {children}
    </ResetPasswordContext.Provider>
  );
};

export default ResetPassowrdProvider;
