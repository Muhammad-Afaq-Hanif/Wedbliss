import React from "react";
import Welcome from "./Welcome";
import ServicesChart from "./ServicesChart";
import VendorUserChart from "./VendorUserChart";
import ServicesDetails from "./ServicesDetails";
import Loading from "../../../Services/BaseService/Loading";
import { useVendorContext } from "../../../../Providers/Dashboards/Vendor/VendorProvider";

const Index = () => {
  const { totalData } = useVendorContext();
  if (!totalData) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div class="w-10/12">
      <div class="flex flex-row">
        {/* <Welcome /> */}
        <ServicesDetails />
        {/* <VendorUserChart /> */}
      </div>
      <div class="flex flex-row  mt-6">
        <div class="bg-white rounded-xl shadow-lg px-6 py-4 w-[100%]">
          <ServicesChart />
        </div>
      </div>
    </div>
  );
};

export default Index;
