import React from "react";
import SideBar from "../../../Components/Dashboards/Admin/SideBar";
import Services from "../../../Components/Dashboards/Admin/ManageServices/Services";
import Vendors from "../../../Components/Dashboards/Admin/ManageVendors/Vendors";
import AdminFetchProvider from "../../../Providers/Dashboards/Admin/AdminFetchProvier";
import Search from "../../../Components/Dashboards/Admin/Search";
import Pagination from "../../../Components/Dashboards/Admin/Pagination";
import { useParams } from "react-router-dom";
import Users from "../../../Components/Dashboards/Admin/ManageUser/Users";
import AdminDeleteProvider from "../../../Providers/Dashboards/Admin/AdminDeleteProvider";

const ManageServices = () => {
  const { id } = useParams();
  return (
    <AdminDeleteProvider>
      <AdminFetchProvider>
        <div className="mt-[50px]">
          <div class="bg-[#007F73]">
            <div class="flex flex-row pt-24 px-10 pb-4">
              <SideBar />

              <div className="grid">
                <Search />
                {id == "services" ? (
                  <Services />
                ) : id == "vendors" ? (
                  <Vendors />
                ) : id == "users" ? (
                  <Users />
                ) : (
                  <h1>Not Found</h1>
                )}

                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </AdminFetchProvider>
    </AdminDeleteProvider>
  );
};

export default ManageServices;
