import React from "react";
import SideBar from "../../Components/Dashboards/Admin/SideBar";
import ChangePasswordIndex from "../../Components/Dashboards/ChangePasswordIndex";
import ChangePasswordProvider from "../../Providers/Dashboards/ChangePasswordProvider";

const ChangePassword = () => {
  return (
    <ChangePasswordProvider>
      <div>
        <div className="mt-[50px]">
          <div class="bg-[#007F73]">
            <div class="flex flex-row pt-24 px-10 pb-4">
              <SideBar />
              <ChangePasswordIndex />
            </div>
          </div>
        </div>
      </div>
    </ChangePasswordProvider>
  );
};

export default ChangePassword;
