import { useEffect } from "react";
import { useState } from "react";
import { useAddNewServiceContext } from "../Providers/Services/BaseService/AddNewServiceProvider";

const useFetchLocation = () => {
  const { serviceLocation, setServiceLocation } = useAddNewServiceContext();
  const [geoCode, setGeoCode] = useState("");
  console.log("Geo code ", geoCode);
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
  }, [setServiceLocation]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!serviceLocation) return;
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${serviceLocation[0]},${serviceLocation[1]}&key=1675fc7425db4336aff1aad418e1d80a`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setGeoCode(data.results[0].formatted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [serviceLocation]);
  return { geoCode };
};

export default useFetchLocation;
