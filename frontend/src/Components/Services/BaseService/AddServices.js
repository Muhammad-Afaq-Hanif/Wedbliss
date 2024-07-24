import { useContext, useState } from "react";
import { useEffect } from "react";
import { MapContainer, useMapEvents } from "react-leaflet";
import { Popup, Marker, TileLayer } from "react-leaflet";
import { useAddNewServiceContext } from "../../../Providers/Services/BaseService/AddNewServiceProvider";

const AddServices = function () {
  const {
    serviceName,
    setServiceName,
    serviceType,
    setServiceType,
    serviceCapacity,
    setServiceCapacity,
    servicePrice,
    setServicePrice,
    serviceCity,
    setServiceCity,
    serviceDescription,
    setServiceDescription,
    serviceImages,
    serviceImageCover,
    setServiceImageCover,
    setServiceImages,
    setSubmit,
    serviceLocation,
    setServiceLocation,
    serviceSummary,
    setServiceSummary,
  } = useAddNewServiceContext();
  console.log(serviceImageCover);

  console.log(serviceLocation);
  const [geoCode, setGeoCode] = useState("");
  useEffect(() => {
    const fetching = function () {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setServiceLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        (error) => {
          setServiceLocation([33.68642075107263, 73.0558955998058]);
        }
      );
    };
    fetching();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        if (!serviceLocation) return;
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${serviceLocation[0]},${serviceLocation[1]}&key=1675fc7425db4336aff1aad418e1d80a`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setGeoCode(data.results[0].formatted);
        console.log(geoCode);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the position changes
    fetchData();
  }, [serviceLocation]);
  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-[#007F73] rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-[40px] font-bold text-white capitalize dark:text-white text-center">
          Add new Service
        </h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200">
                Service Name
              </label>
              <input
                required
                value={serviceName}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
                onChange={(event) => {
                  setServiceName(event.target.value);
                }}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                Marraige Hall Type
              </label>
              <select
                defaultValue={"Hall"}
                value={serviceType}
                onChange={(event) => {
                  setServiceType(event.target.value);
                }}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 cursor-pointer dark:border-gray-600 focus:outline-none"
              >
                <option value="Hall">Hall</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Marquee">Marquee</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Capacity</label>
              <input
                required
                type="Number"
                value={serviceCapacity}
                onChange={(event) => {
                  setServiceCapacity(Number(event.target.value));
                }}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200">Price</label>
              <input
                value={servicePrice}
                onChange={(event) => {
                  setServicePrice(Number(event.target.value));
                }}
                required
                type="Number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200">City</label>
              <select
                value={serviceCity}
                onChange={(event) => {
                  setServiceCity(event.target.value);
                }}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
              >
                <option value="">Select a city</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Multan">Multan</option>
                <option value="Gujranwala">Gujranwala</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Quetta">Quetta</option>
                <option value="Sialkot">Sialkot</option>
                <option value="Bahawalpur">Bahawalpur</option>
                <option value="Sargodha">Sargodha</option>
                <option value="Sukkur">Sukkur</option>
                <option value="Larkana">Larkana</option>
                <option value="Sheikhupura">Sheikhupura</option>
                <option value="Jhang">Jhang</option>
                <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Mardan">Mardan</option>
                <option value="Hafizabad">Hafizabad</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                value={serviceDescription}
                onChange={(event) => {
                  setServiceDescription(event.target.value);
                }}
              >
                Service Description
              </label>
              <textarea
                value={serviceDescription}
                onChange={(event) => {
                  setServiceDescription(event.target.value);
                }}
                required
                type="textarea"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 mt-[-20px]">
                    <div className="flex text-sm text-gray-600 ">
                      <label
                        for="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-[#007F73] hover:text-[#007F73] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="">Upload a file</span>
                        <input
                          onChange={(event) => {
                            setServiceImageCover(event.target.files[0]);
                          }}
                          type="file"
                          className=""
                        />
                      </label>
                    </div>
                    <p className="text-xs text-white">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <label className="text-white dark:text-gray-200">
                Service Summary
              </label>
              <textarea
                value={serviceSummary}
                onChange={(event) => {
                  setServiceSummary(event.target.value);
                }}
                required
                type="textarea"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
              ></textarea>
            </div>
          </div>
          <div className="pt-[30px]">
            <label className="text-white pb-[10px]">
              Marriage Hall Location
            </label>
            {serviceLocation && serviceLocation.length === 2 && (
              <div className=" ">
                <MapContainer
                  center={serviceLocation}
                  zoom={13}
                  scrollWheelZoom={true}
                  style={{ height: "300px", zIndex: 0 }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <DetectLocation setServiceLocation={setServiceLocation} />
                  <Marker position={serviceLocation}>
                    <Popup>
                      Latitude {serviceLocation[0]} Longitude{" "}
                      {serviceLocation[1]}
                    </Popup>
                  </Marker>
                </MapContainer>
                <h1 className="text-white text-center text-[18px] font-[600]">
                  {geoCode} <br></br>
                </h1>
              </div>
            )}
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-[white] rounded-md hover:bg-[white] focus:outline-none focus:bg-gray-600"
              onClick={() => {
                setSubmit(true);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

const DetectLocation = function ({ setServiceLocation }) {
  useMapEvents({
    click: (event) => {
      if (event.latlng) {
        console.log(
          `Latitude ${event.latlng.lat} and Longitude ${event.latlng.lng}`
        );
        setServiceLocation([event.latlng.lat, event.latlng.lng]);
      }
    },
  });
  return null;
};

export default AddServices;
