import BestFourServices from "./BestFourServices";
import { useEffect, useState } from "react";

const TopServices = function () {
  const [marraiageHall, setMarraiageHall] = useState();
  const [photography, setPhotography] = useState();
  const [decoration, setDecoration] = useState();
  const [parlor, setParlor] = useState();
  const [catering, setCatering] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/marriage-hall?currentPage=1&recordsPerPage=4`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setMarraiageHall(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/photography?currentPage=1&recordsPerPage=4`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setPhotography(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/decoration?currentPage=1&recordsPerPage=4`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setDecoration(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/catering?currentPage=1&recordsPerPage=4`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setCatering(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/parlor?currentPage=1&recordsPerPage=4`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setParlor(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <BestFourServices type="marriage-hall" data={marraiageHall} />
      <BestFourServices type="photography" data={photography} />
      <BestFourServices type="parlor" data={parlor} />
      <BestFourServices type="decoration" data={decoration} />
      <BestFourServices type="catering" data={catering} />
    </>
  );
};

export default TopServices;
