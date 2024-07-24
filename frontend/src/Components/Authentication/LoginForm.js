import { useContext } from "react";
import { LoginContext } from "../../Providers/Authentication/LoginProvider";

const LoginForm = function () {
  const { email, password, setEmail, setPassword, setFetchData } =
    useContext(LoginContext);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button
        class="mt-5 tracking-wide font-semibold bg-[#007F73] text-gray-100 w-full py-4 rounded-lg hover:bg-[#4CCD99] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        onClick={() => {
          setFetchData(true);
        }}
      >
        <svg
          class="w-6 h-6 -ml-2"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
        <span class="ml-3">Log In</span>
      </button>
    </form>
  );
};

export default LoginForm;
