import { useState, useEffect, useContext } from "react";
import Map from "./Map";
import { SingleMarriageHallContext } from "../../../../../Providers/Services/MarriageHall/SingleMarriageHallProvider";

const Details = function () {
  const { data, setData } = useContext(SingleMarriageHallContext);

  console.log(data);
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState();
  console.log("Address  ", address);
  useEffect(() => {
    if (data && data.location && data.location.coordinates) {
      const [longitude, latitude] = data.location.coordinates;
      setPosition([latitude, longitude]);
      const fetchData = async () => {
        try {
          if (data && data.location && data.location.coordinates) {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${position[0]},${position[1]}&key=1675fc7425db4336aff1aad418e1d80a`
            );

            if (!response.ok) {
              setAddress(data.city);
              throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setAddress(data.results[0].formatted);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [data]);

  return (
    <div className="max-w-[100%]">
      <h5 class="mb-1 text-[#4B414D] text-[24px] font-[700]">{data.name}</h5>
      <ul class="grid grid-cols-[70%_10%] gap-[10%] text-gray-500 dark:text-gray-300">
        <li>
          <i class="mdi mdi-account"></i> 🗺️ {address && address}
        </li>
        <li className="text-yellow-500">
          <span className="px-2 py-1 text-white bg-[#007F73] rounded text-13">
            <span>⭐&nbsp;&nbsp;</span>
            {parseFloat(data.ratingAverage).toFixed(2)}&nbsp;/&nbsp;(
            {data.ratingQuantity})
          </span>
        </li>
      </ul>
      <div class="grid grid-cols-4 gap-[20px]">
        <div class="border rounded border-[#007F73] my-[20px]">
          <p class="mb-1 text-gray-500 text-[18px]">🏷️ Price</p>
          <p class="font-medium text-gray-900 text-[18px]">
            &nbsp; PKR {data.price}
          </p>
        </div>
        <div class="border rounded border-[#007F73] my-[20px]">
          <p class="mb-1 text-gray-500 text-[18px]">🧑‍🤝‍👨 Capacity</p>
          <p class="font-medium text-gray-900 text-[18px]">
            &nbsp; {data.capacity}
          </p>
        </div>
        <div class="border rounded border-[#007F73] my-[20px]">
          <p class="mb-1 text-gray-500 text-[18px]">🏡 Type</p>
          <p class="font-medium text-gray-900 text-[18px]">
            &nbsp; {data.type}
          </p>
        </div>
        <div class="border rounded border-[#007F73] my-[20px]">
          <p class="mb-1 text-gray-500 text-[18px]">🏞️ City</p>
          <p class="font-medium text-gray-900 text-[18px]">
            &nbsp; {data.city}
          </p>
        </div>
      </div>
      <div>
        <div class="mt-5">
          <h5 class="mb-3 text-gray-900">Summary</h5>
          <p class="mb-0 text-gray-500">{data.summary}</p>
        </div>
        <div class="mt-5">
          <h5 class="mb-3 text-gray-900">Description</h5>
          <p class="mb-0 text-gray-500">{data.description}</p>
        </div>
      </div>
      {<Map data={data} setData={setData} />}
    </div>
  );
};

export default Details;
