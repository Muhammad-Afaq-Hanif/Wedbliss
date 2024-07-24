import React from "react";
import SideBar from "../../Components/Dashboards/Admin/SideBar";
import ProfileIndex from "../../Components/Dashboards/ProfileIndex";
import GetUpdateProfileProvider from "../../Providers/Dashboards/GetUpdateProfileProvider";

const Profile = () => {
  return (
    <GetUpdateProfileProvider>
      <div>
        <div className="mt-[50px]">
          <div class="bg-[#007F73]">
            <div class="flex flex-row pt-24 px-10 pb-4">
              <SideBar />
              <ProfileIndex />
            </div>
          </div>
        </div>
      </div>
    </GetUpdateProfileProvider>
  );
};

export default Profile;
