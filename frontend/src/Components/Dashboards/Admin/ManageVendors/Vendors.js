import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAdminFetchContext } from "../../../../Providers/Dashboards/Admin/AdminFetchProvier";
import DeleteButton from "../DeleteButton";
import LoadingDashboard from "../LoadingDashboard";
const Vendors = () => {
  const { data, fetching } = useAdminFetchContext();
  if (!data) {
    return <LoadingDashboard />;
  }
  return (
    <div className="bg-[white] w-[100%] rounded-xl shadow-lg mb-6 px-6 py-3">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vendor Name
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Brand Name
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact Number
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {data.map((el) => {
            return (
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">{el.name}</td>
                <td class="px-6 py-4 whitespace-nowrap">{el.brandName}</td>
                <td class="px-6 py-4 whitespace-nowrap">{el.email}</td>
                <td class="px-6 py-4 whitespace-nowrap">{el.contactNumber}</td>

                <DeleteButton elementId={el._id} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Vendors;
