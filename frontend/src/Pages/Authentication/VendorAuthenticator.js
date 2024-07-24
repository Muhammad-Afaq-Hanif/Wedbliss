import { useNavigate } from "react-router-dom";
import useVendorAuthenticator from "../../Hooks/Authentication/useVendorAuthenticator";
import Loading from "../../Components/Services/BaseService/Loading";
const VendorAuthenticator = function () {
  const { data, isLoading } = useVendorAuthenticator();
  const navigate = useNavigate();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data === "vendor" ? (
        navigate("/addnewservice")
      ) : (
        navigate("/login/vendor")
      )}
    </>
  );
};

export default VendorAuthenticator;
