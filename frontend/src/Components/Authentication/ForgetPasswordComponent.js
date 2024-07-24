import ForgetPasswordForm from "./ForgetPasswordForm";
import { Link } from "react-router-dom";
const ForgetPasswordComponent = function () {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Forget Password
            </h1>
            <p className="text-center text-[20px] text-[#007F73] font-semibold pt-[20px]">
              ⚠️ Token Expired After 10 minutes
            </p>
            <p className="text-center text-[16px] text-[black] font-[400] pt-[20px]">
              Forgot your password? No worries! Just enter your email address
              below, and we'll send you a link to reset your password. It's that
              easy!
            </p>
            <div className="w-full flex-1 mt-8">
              <div className="my-6 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Forget Password
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <ForgetPasswordForm />
                {/* <Link to="/login">
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                    <span className="ml-4">Back to Login</span>
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex-1 bg-indigo-100 text-center hidden lg:flex bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/images/Authentication/weeding auth.jpg")`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ForgetPasswordComponent;
