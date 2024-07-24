import React from "react";
import { useAddNewServiceContext } from "../../../../Providers/Services/BaseService/AddNewServiceProvider";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import useFetchLocation from "../../../../Hooks/useFetchLocation";
const Map = () => {
  const { serviceLocation, setServiceLocation } = useAddNewServiceContext();
  const { geoCode } = useFetchLocation();
  return (
    <>
      {" "}
      {serviceLocation && serviceLocation.length === 2 && (
        <div className="">
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
                Latitude {serviceLocation[0]} Longitude {serviceLocation[1]}
              </Popup>
            </Marker>
          </MapContainer>
          <h1 className="text-black text-center text-[18px] font-[600]">
            {geoCode} <br></br>
          </h1>
        </div>
      )}
    </>
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

export default Map;
