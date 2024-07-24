import React from "react";

import Vendors from "../../../Components/Dashboards/Admin/ManageVendors/Vendors";
import AdminFetchProvider from "../../../Providers/Dashboards/Admin/AdminFetchProvier";
import SideBar from "../../../Components/Dashboards/Admin/SideBar";

const ManageVendors = () => {
  return (
    <div className="mt-[50px]">
      <div class="bg-[#007F73]">
        <div class="flex flex-row pt-24 px-10 pb-4">
          <SideBar />
          <AdminFetchProvider>
            <Vendors />
          </AdminFetchProvider>
        </div>
      </div>
    </div>
  );
};

export default ManageVendors;
