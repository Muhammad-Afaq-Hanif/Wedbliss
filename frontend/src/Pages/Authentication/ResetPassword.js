import ResetPasswordComponent from "../../Components/Authentication/ResetPasswordComponent";
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import ResetPassowrdProvider from "../../Providers/Authentication/ResetPasswordProvider";
const ResetPassword = function () {
  const { role } = useParams();

  return (
    <>
      {role === "admin" || role === "users" || role === "vendor" ? (
        <ResetPassowrdProvider>
          <div>
            <ResetPasswordComponent />
          </div>
        </ResetPassowrdProvider>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default ResetPassword;
