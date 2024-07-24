import React from "react";
import { useAdminFetchContext } from "../../../../Providers/Dashboards/Admin/AdminFetchProvier";
import { GoDotFill } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteButton from "../DeleteButton";
import LoadingDashboard from "../LoadingDashboard";

const Services = () => {
  const { data, fetching } = useAdminFetchContext();

  if (!data) {
    return <LoadingDashboard />;
  }
  return (
    <div className="bg-[white] w-[100%] rounded-xl shadow-lg mb-6 px-6 py-3">
      <table className=" divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Service Name
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating Average
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating Quantity
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Discounted Price
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Availability
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
                <td class="px-2 py-4  ">{el.name}</td>

                <td class="px-2 py-4 ">{el.city}</td>
                <td class="px-2 py-4 ">{el.ratingAverage}</td>
                <td class="px-2 py-4 ">{el.ratingQuantity}</td>
                <td class="px-2 py-4 ">{el.price}</td>
                <td class="px-2 py-4 ">{el.discountedPrice}</td>
                <td class="px-2 py-4 ">
                  {el.available ? (
                    <h1 className="text-[green]">
                      <GoDotFill />
                    </h1>
                  ) : (
                    <h1 className="text-[red]">
                      <GoDotFill />
                    </h1>
                  )}
                </td>

                <DeleteButton elementId={el._id} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
