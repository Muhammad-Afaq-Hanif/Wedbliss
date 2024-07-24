const Authentication = function () {
  return (
    <div class="">
      <h1 class="text-[15px] font-semibold text-[#122642] ">Authentication:</h1>

      <div class="flex gap-[10px] items-center pt-[10px] cursor-pointer">
        <a href="/login">
          <h1 class="text-[14x] hover:text-[#007F73] hover:underline">
            Log In
          </h1>
        </a>
      </div>
      <div class="flex gap-[10px] items-center pt-[10px] cursor-pointer">
        <a href="/signup">
          <h1 class="text-[14x] hover:text-[#007F73] hover:underline">
            Sign Up
          </h1>
        </a>
      </div>
      <div class="flex gap-[10px] items-center pt-[10px] cursor-pointer">
        <a href="/forget-password">
          <h1 class="text-[14x] hover:text-[#007F73] hover:underline">
            Forget Password
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Authentication;
