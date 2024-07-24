import React from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { useGetUpdateProfileContext } from "../../Providers/Dashboards/GetUpdateProfileProvider";
import Loading from "../Services/BaseService/Loading";

const ProfileIndex = () => {
  const { photo, setPhoto, data, setData, setClicked } =
    useGetUpdateProfileContext();
  if (!data) {
    return <Loading />;
  }
  return (
    <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
      <div class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center bg-white dark:bg-gray-800/40">
        <div class="">
          <h1 class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
            Hi, {data.name}
          </h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setClicked(true);
            }}
          >
            <div class="w-full rounded-sm  bg-cover bg-center bg-no-repeat items-center">
              <div
                style={{
                  backgroundImage: `url(http://127.0.0.1:8000/uploads/${data.photo})`,
                }}
                class="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
              >
                <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                  <input
                    type="file"
                    name="photo"
                    id="upload_profile"
                    hidden
                    onChange={(event) => {
                      const file = event.target.files[0]; // Get the selected file
                      setPhoto(file); // Set the file to the photo state
                    }}
                  />
                  <label for="upload_profile">
                    <span className="text-[25px] ">
                      <MdOutlineCameraAlt />
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <h2 class="text-center mt-1 font-semibold dark:text-gray-300">
              Upload Profile Image
            </h2>
            <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
              <div class="w-full  mb-4 mt-6">
                <label for="" class="mb-2 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                  placeholder={data.name}
                  value={data.name}
                  onChange={(event) => {
                    setData({ ...data, name: event.target.value });
                  }}
                />
              </div>
              <div class="w-full  mb-4 lg:mt-6">
                <label for="" class=" dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                  placeholder={data.email}
                  value={data.email}
                  onChange={(event) => {
                    setData({ ...data, email: event.target.value });
                  }}
                />
              </div>
            </div>

            <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
              <div class="w-full">
                <h3 class="dark:text-gray-300 mb-2">Gender</h3>
                <select
                  class="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                  value={data.gender}
                  onChange={(event) => {
                    setData({ ...data, gender: event.target.value });
                  }}
                >
                  <option disabled value="">
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="w-full">
                <h3 class="dark:text-gray-300 mb-2">Contact Number</h3>
                <input
                  type="Number"
                  class="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                  placeholder={data.contactNumber}
                  value={data.contactNumber}
                  onChange={(event) => {
                    setData({ ...data, contactNumber: event.target.value });
                  }}
                />
              </div>
            </div>
            <div class="w-full rounded-lg bg-[#007E72] mt-4 text-white text-lg font-semibold">
              <button
                type="submit"
                class="w-full p-4"
                onClick={() => {
                  setClicked(true);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileIndex;
