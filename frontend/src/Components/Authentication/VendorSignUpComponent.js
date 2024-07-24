import { Link } from "react-router-dom";
import VendorSignUpForm from "./VendorSignUpForm";

const SignUpComponent = function () {
  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
      <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div class="mt-12 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-extrabold">Vendor Sign up</h1>

            <div class="w-full flex-1 mt-1">
              <div class="my-2 border-b text-center">
                <div class="leading-none  px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 pb-4">
                  Join us today and unlock your potential in selling!
                </div>
              </div>

              <div class="mx-auto ">
                <VendorSignUpForm />
                <Link to="/login/vendor">
                  <button class="w-full max-w-screen-md font-bold shadow-sm rounded-lg py-4 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-3">
                    <span class="ml-4">Already have an account? Login now</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex-1 bg-indigo-100 text-center hidden lg:flex bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/images/Authentication/desination.jpg")`,
          }}
        >
          <div class="m-12 xl:m-16 w-full "></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
