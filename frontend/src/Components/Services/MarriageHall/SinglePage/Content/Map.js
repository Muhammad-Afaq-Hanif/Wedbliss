import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = function ({ data }) {
  const [position, setPosition] = useState(); // Default position

  useEffect(() => {
    if (data && data.location && data.location.coordinates) {
      const [longitude, latitude] = data.location.coordinates;
      setPosition([latitude, longitude]);
    }
  }, [data]);
  return (
    <div className="mt-4">
      <h6 className="mb-3 text-16 dark:text-gray-50">Location</h6>
      {position && (
        <>
          <MapContainer
            center={position}
            zoom={12}
            scrollWheelZoom={true}
            style={{ height: "300px", zIndex: 0 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position && (
              <Marker position={position}>
                <Popup>{`${position[0]}, ${position[1]}`}</Popup>
              </Marker>
            )}
          </MapContainer>
        </>
      )}
    </div>
  );
};

export default Map;
