import LoginComponent from "../../Components/Authentication/LoginComponent";
import { useParams } from "react-router-dom";

import { LoginContext } from "../../Providers/Authentication/LoginProvider";
import LoginProvider from "../../Providers/Authentication/LoginProvider";
import PageNotFound from "../PageNotFound";
import { useContext } from "react";
const Login = function () {
  const { role } = useParams();
  console.log(role);
  return (
    <>
      {role === "vendor" || role === "admin" || role === "users" ? (
        <div>
          <LoginProvider>
            <LoginComponent role={role} />
          </LoginProvider>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default Login;
