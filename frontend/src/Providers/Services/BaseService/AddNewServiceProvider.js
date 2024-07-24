import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const addNewServiceContext = createContext();

const AddNewServiceProvider = function ({ children }) {
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceCity, setServiceCity] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceAvailability, setServiceAvailability] = useState("");
  const [serviceImageCover, setServiceImageCover] = useState("");
  const [serviceSummary, setServiceSummary] = useState("");
  const [serviceLocation, setServiceLocation] = useState([]);
  const [plates, setPlates] = useState("");
  const [seating, setSeating] = useState("");
  const [waiters, setWaiters] = useState("");
  const [packages, setPackages] = useState("");
  const [servicesOffered, setServicesOffered] = useState("");
  const [type, setType] = useState("");
  const [photographerGender, setPhotographerGender] = useState("");
  const [capacity, setCapacity] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [submit, setSubmit] = useState(true);
  const navigate = useNavigate();

  console.log("output", serviceLocation);
  const { id } = useParams();
  useEffect(() => {
    const formData = new FormData();
    formData.append("name", serviceName);
    formData.append("price", servicePrice);
    formData.append("city", serviceCity);
    formData.append("description", serviceDescription);
    formData.append("availability", serviceAvailability);
    formData.append("summary", serviceSummary);
    formData.append("imageCover", serviceImageCover);
    formData.append("coordinates", JSON.stringify(serviceLocation));
    formData.append("discountedPrice", discountedPrice || 0);

    console.log(serviceImageCover);
    // Additional fields based on the service type
    if (id === "catering") {
      formData.append("plates", plates);
      formData.append("seating", seating);
      formData.append("waiters", waiters);
      formData.append("packages", packages);
    } else if (id === "decoration" || id === "parlor") {
      formData.append("servicesOffered", servicesOffered);
    } else if (id === "parlor") {
      formData.append("type", type);
    } else if (id === "photography") {
      formData.append("photographerGender", photographerGender);
    } else if (id === "marriagehall") {
      formData.append("capacity", capacity);
      formData.append("type", type);
    }

    // formData.append("images", serviceImages); // Commented out since serviceImages array is not used
    if (submit === false) {
      return;
    }

    try {
      const submitService = async function () {
        console.log("Service", serviceLocation);
        const resp = await fetch(
          `http://127.0.0.1:8000/api/v1/dashboard/vendor/addnewservice/${id}`,
          {
            method: "POST",
            credentials: "include",
            body: formData,
          }
        );
        if (resp.ok) {
          console.log("Service Added Successfully");
          alert("Service Added Successfully");
          navigate(`/services/${serviceName}`);
        }
      };
      setSubmit(false);
      submitService();
    } catch (err) {
      console.log("Service Not Added");
    }
  }, [submit]);

  return (
    <addNewServiceContext.Provider
      value={{
        serviceName,
        servicePrice,
        discountedPrice,
        serviceCity,
        serviceDescription,
        serviceAvailability,
        serviceImageCover,
        serviceSummary,
        serviceLocation,
        plates,
        seating,
        waiters,
        packages,
        servicesOffered,
        type,
        photographerGender,
        capacity,
        setServiceName,
        setServicePrice,
        setDiscountedPrice,
        setServiceCity,
        setServiceDescription,
        setServiceAvailability,
        setServiceImageCover,
        setServiceSummary,
        setServiceLocation,
        setPlates,
        setSeating,
        setWaiters,
        setPackages,
        setServicesOffered,
        setType,
        setPhotographerGender,
        setCapacity,
        setSubmit,
      }}
    >
      {children}
    </addNewServiceContext.Provider>
  );
};

export const useAddNewServiceContext = () => {
  return useContext(addNewServiceContext);
};

export default AddNewServiceProvider;
