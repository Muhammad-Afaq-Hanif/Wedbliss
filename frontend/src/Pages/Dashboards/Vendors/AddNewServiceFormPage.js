import React from "react";
import SideBar from "../../../Components/Dashboards/Vendor/SideBar";

import AddNewServiceProvider from "../../../Providers/Services/BaseService/AddNewServiceProvider";
import AddMarriageHall from "../../../Components/Dashboards/Vendor/Forms/AddMarriageHall";
import { useParams } from "react-router-dom";
import AddCatering from "../../../Components/Dashboards/Vendor/Forms/AddCatering";
import AddDecoration from "../../../Components/Dashboards/Vendor/Forms/AddDecoration";
import AddParlor from "../../../Components/Dashboards/Vendor/Forms/AddParlor";
import AddPhotography from "../../../Components/Dashboards/Vendor/Forms/AddPhotography";

const AddNewServiceFormPage = () => {
  const { id } = useParams();
  return (
    <div className="mt-[50px]">
      <div class="bg-[#007F73]">
        <div class="flex flex-row pt-24 px-10 pb-4">
          <SideBar />
          <AddNewServiceProvider>
            {id == "marriagehall" ? (
              <AddMarriageHall />
            ) : id == "catering" ? (
              <AddCatering />
            ) : id == "decoration" ? (
              <AddDecoration />
            ) : id == "parlor" ? (
              <AddParlor />
            ) : id == "photographer" ? (
              <AddPhotography />
            ) : (
              "None"
            )}
          </AddNewServiceProvider>
        </div>
      </div>
    </div>
  );
};

export default AddNewServiceFormPage;
