import SignUpComponent from "../../Components/Authentication/SignUpComponent";
import SignupProvider from "../../Providers/Authentication/SignupProvider";

const SignUp = function () {
  return (
    <div>
      <SignupProvider>
        <SignUpComponent />
      </SignupProvider>
    </div>
  );
};

export default SignUp;
