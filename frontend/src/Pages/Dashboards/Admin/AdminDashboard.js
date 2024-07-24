import React from "react";
import Index from "../../../Components/Dashboards/Admin/Dashboard/Index";
import AdminProvider from "../../../Providers/Dashboards/Admin/AdminProvider";
import SideBar from "../../../Components/Dashboards/Admin/SideBar";
import Search from "../../../Components/Dashboards/Admin/Search";

const AdminDashboard = () => {
  return (
    <AdminProvider>
      <div className="mt-[50px]">
        <div class="bg-[#007F73]">
          <div class="flex flex-row pt-24 px-10 pb-4">
            <SideBar />
            <Index />
          </div>
        </div>
      </div>
    </AdminProvider>
  );
};

export default AdminDashboard;
