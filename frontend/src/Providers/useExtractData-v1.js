import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const useExtractData = function () {
  const [hallsData, setHallsData] = useState([]);
  const [beautyParlours, setbeautyParloursData] = useState([]);
  const [photographersData, setPhotographersData] = useState([]);
  const [cateringServicesData, setCateringServicesData] = useState([]);
  const [decoratorsData, setDecoratorsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("");
  console.log("Param ", searchParams.get("city"));
  useEffect(() => {
    const city = searchParams.get("city");
    const marriageHalls = async function () {
      if (city) {
        let response = await fetch(
          `http://127.0.0.1:8000/marriagehall?city=${city}`,
          {
            // Added "http://"
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(),
          }
        );
        response = await response.json();
        console.log(response);
        setHallsData(response);
      }
      if (!city) {
        let response = await fetch(`http://127.0.0.1:8000/marriagehall`, {
          // Added "http://"
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(),
        });
        response = await response.json();
        console.log(response);
        setHallsData(response);
      }
    };
    const beautyParlours = async function () {
      let response = await fetch("http://localhost:8001/BeautyParlours", {
        // Added "http://"
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(),
      });
      response = await response.json();
      console.log(response);
      setbeautyParloursData(response);
    };
    const photographers = async function () {
      let response = await fetch("http://localhost:8001/Photographers", {
        // Added "http://"
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(),
      });
      response = await response.json();
      console.log(response);
      setPhotographersData(response);
    };
    const cateringServices = async function () {
      let response = await fetch("http://localhost:8001/CateringServices", {
        // Added "http://"
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(),
      });
      response = await response.json();
      console.log(response);
      setCateringServicesData(response);
    };
    const decorators = async function () {
      let response = await fetch("http://localhost:8001/Decorators", {
        // Added "http://"
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(),
      });
      response = await response.json();
      console.log(response);
      setDecoratorsData(response);
    };
    marriageHalls();
    beautyParlours();
    photographers();
    cateringServices();
    decorators();
  }, []);
  return {
    hallsData,
    beautyParlours,
    photographersData,
    cateringServicesData,
    decoratorsData,
  };
};

export default useExtractData;
