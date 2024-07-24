import ResetPasswordForm from "./ResetPasswordForm";
import { Link } from "react-router-dom";
const ResetPasswordComponent = function () {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Reset Password
            </h1>
            <p className="text-center text-[16px] text-[black] font-[400] pt-[20px]">
              🤩 Great! You're one step closer to regaining access to your
              account. Please enter your new password below to complete the
              password reset process. Thank you!
            </p>

            <div className="w-full flex-1 mt-8">
              <div className="my-6 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Reset Password
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <ResetPasswordForm />
                {/* <Link to={`login/${role}`}>
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

export default ResetPasswordComponent;
