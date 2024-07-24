import { useContext } from "react";
import { VendorSignUpContext } from "../../Providers/Authentication/VendorSignUpProvider";

const SignUpForm = function () {
  const {
    name,
    brandName,
    contactNumber,
    lineOfBusiness,
    setName,
    setBrandName,
    setContactNumber,
    setLineOfBusiness,
    email,
    password,
    passwordConfirm,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setFetchData,
  } = useContext(VendorSignUpContext);
  return (
    // action="/user/signup" method="POST"
    <div>
      <div class="flex -mx-3">
        <div class="w-1/2 px-3 mb-5">
          <label for="" class="text-xs font-semibold px-1">
            Your Name
          </label>
          <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#007F73]"
              placeholder="Ali"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="w-1/2 px-3 mb-5">
          <label for="" class="text-xs font-semibold px-1">
            Brand Name
          </label>
          <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#007F73]"
              placeholder="WedBliss"
              value={brandName}
              onChange={(event) => {
                setBrandName(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div class="flex -mx-3">
        <div class="w-full px-3 mb-5">
          <label for="" class="text-xs font-semibold px-1">
            Email
          </label>
          <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="email"
              class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#007F73]"
              placeholder="alilatifchaudhary@gmail.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div class="flex -mx-3">
        <div class="w-full px-3 mb-5">
          <label for="" class="text-xs font-semibold px-1">
            Contact No
          </label>
          <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="Number"
              class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#007F73]"
              placeholder="03066298090"
              value={contactNumber}
              onChange={(event) => {
                setContactNumber(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div class="flex -mx-3">
        <div class="w-full px-3 mb-5">
          <label for="" class="text-xs font-semibold px-1">
            Service Category
          </label>
          <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
            </div>
            <select
              class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#007F73] cursor-pointer"
              value={lineOfBusiness}
              onChange={(event) => {
                setLineOfBusiness(event.target.value);
              }}
            >
              <option disabled selected>
                Select Service
              </option>
              <option value="Marriage Hall">Marriage Hall</option>
              <option value="Decoration Service">Decoration Service</option>
              <option value="Beauty Parlor">Beauty Parlor</option>
              <option value="Catering Service">Catering Service</option>
              <option value="Photographers">Photographers</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex -mx-3">
        <div class="w-1/2 px-3 mb-5">
          <label for="" class="text-xs font-semibold px-1">
            Password
          </label>
          <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="password"
              class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#007F73]"
              placeholder="*********"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="w-1/2 px-3 mb-5">
          <label for="" class="text-xs font-semibold px-1">
            Password Confirm
          </label>
          <div class="flex">
            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="password"
              class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#007F73]"
              placeholder="*********"
              value={passwordConfirm}
              onChange={(event) => {
                setPasswordConfirm(event.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div class="flex -mx-3">
        <div class="w-full px-3 mb-5">
          <button
            class="block w-full max-w-xs mx-auto bg-[#007F73] hover:bg-[#007F73] focus:bg-[#007F73] text-white rounded-lg px-3 py-3 font-semibold"
            onClick={() => {
              setFetchData(true);
            }}
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
