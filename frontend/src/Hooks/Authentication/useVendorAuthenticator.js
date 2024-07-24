import { useState, useEffect } from "react";

const useVendorAuthenticator = function () {
  const [data, setData] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/me/vendor-authenticator`,
          {
            method: "GET",
            credentials: "include", // Include credentials for cookies
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data === "vendor") {
          setData("vendor");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, isLoading };
};

export default useVendorAuthenticator;
