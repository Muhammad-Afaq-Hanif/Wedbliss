import VendorSignUpComponent from "../../Components/Authentication/VendorSignUpComponent";
import VendorSignUpProvider from "../../Providers/Authentication/VendorSignUpProvider";
const SignUp = function () {
  return (
    <div>
      <VendorSignUpProvider>
        <VendorSignUpComponent />
      </VendorSignUpProvider>
    </div>
  );
};

export default SignUp;
