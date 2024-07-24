import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

const ShortProfile = () => {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/v1/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data.data);

        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching the data.");
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {fetching ? (
        <h1>Loading</h1>
      ) : (
        <div className="grid grid-cols-[30%_70%] gap-4 bg-white rounded-xl shadow-lg mb-6 px-6 py-3 items-center">
          <div>
            <div
              style={{
                backgroundImage: `url(http://127.0.0.1:8000/uploads/${data.photo})`,
              }}
              class="mx-auto flex justify-center w-[80px] h-[80px] bg-blue-300/20 rounded-full bg-cover  bg-no-repeat"
            ></div>
          </div>
          <div>
            <h2 className="text-[20px] font-[600]">{data.name}</h2>
            <div className="grid grid-cols-[10%_80%] items-center text-[green] text-[14px]">
              <h2>
                <GoDotFill />
              </h2>
              <h2>Online</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShortProfile;
