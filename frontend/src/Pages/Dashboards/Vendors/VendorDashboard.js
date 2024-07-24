import React from "react";
import SideBar from "../../../Components/Dashboards/Vendor/SideBar";
import Index from "../../../Components/Dashboards/Vendor/Dashboard/Index";
import VendorProvider from "../../../Providers/Dashboards/Vendor/VendorProvider";

const VendorDashboard = () => {
  return (
    <VendorProvider>
      <div className="mt-[50px]">
        <div class="bg-[#007F73]">
          <div class="flex flex-row pt-24 px-10 pb-4">
            <SideBar />
            <Index />
          </div>
        </div>
      </div>
    </VendorProvider>
  );
};

export default VendorDashboard;
