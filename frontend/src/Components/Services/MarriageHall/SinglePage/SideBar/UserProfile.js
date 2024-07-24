import { useContext } from "react";
import { SingleMarriageHallContext } from "../../../../../Providers/Services/MarriageHall/SingleMarriageHallProvider";

const UserProfile = function () {
  const { data, setData } = useContext(SingleMarriageHallContext);
  return (
    <>
      {data.vendor && (
        <div class="py-2 px-6 border rounded border-[grey]">
          <div className="py-4 rounded-lg">
            <img
              height={"100x"}
              width={"100px"}
              src={`http://127.0.0.1:8000/uploads/${data.vendor.photo}`}
              alt=""
              className="rounded-2xl mx-auto"
            />
          </div>
          <div class=" text-center">
            <h6 class="text-gray-900 text-[18px] font-[800] ">
              Brand: {data.vendor.brandName}
            </h6>
            <p class="text-[#007F73] text-[18px] font-[800]">
              Vendor: {data.vendor.name}
            </p>
          </div>

          <ul class="mt-4 space-y-2">
            <li>
              <div class="flex">
                <div class="">
                  <h6 class="mb-1 text-sm text-gray-900">📞 Phone</h6>
                  <p class="text-sm text-gray-500">
                    {data.vendor.contactNumber}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex">
                <div class="">
                  <h6 class="mb-1 text-sm text-gray-900">✉️ Email</h6>
                  <p class="text-sm text-gray-500">{data.vendor.email}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex">
                <div class="">
                  <h6 class="mb-1 text-sm text-gray-900">
                    🌐 Line of Business
                  </h6>
                  <p class="text-sm text-gray-500">
                    {data.vendor.lineOfBusiness}
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div class="mt-4  grid">
            <button className="bg-[#007F73] py-[10px] px-[30px] text-white">
              <a href={`tel:${data.vendor.contactNumber}`}>
                Contact With {data.vendor.name}
              </a>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
