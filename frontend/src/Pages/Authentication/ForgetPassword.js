import ForgetPasswordComponent from "../../Components/Authentication/ForgetPasswordComponent";
import ForgetPasswordProvider from "../../Providers/Authentication/ForgetPasswordProvider";

import PageNotFound from "../PageNotFound";
import { useParams } from "react-router-dom";

const ForgetPassword = function () {
  const { role } = useParams();
  return (
    <>
      {role === "admin" || role === "vendor" || role === "users" ? (
        <ForgetPasswordProvider>
          <div>
            <ForgetPasswordComponent />
          </div>
        </ForgetPasswordProvider>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default ForgetPassword;
