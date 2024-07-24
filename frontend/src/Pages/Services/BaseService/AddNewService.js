import AddServices from "../../../Components/Services/BaseService/AddServices";
import useVendorAuthenticator from "../../../Hooks/Authentication/useVendorAuthenticator";
import VendorSignUp from "../../Authentication/VendorSignUp";
import Loading from "../../../Components/Services/BaseService/Loading";
import AddNewServiceProvider from "../../../Providers/Services/BaseService/AddNewServiceProvider";
import VendorDashboard from "../../Dashboards/Vendors/VendorDashboard";

const AddNewService = function () {
  const { data, isLoading } = useVendorAuthenticator();

  return (
    <AddNewServiceProvider>
      {isLoading ? (
        <div>{<Loading />}</div>
      ) : data === "vendor" ? (
        <div className="pt-[80px]">
          <VendorDashboard />
        </div>
      ) : (
        <VendorSignUp />
      )}
    </AddNewServiceProvider>
  );
};

export default AddNewService;
