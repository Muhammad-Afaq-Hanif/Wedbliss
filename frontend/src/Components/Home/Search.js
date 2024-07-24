import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Search = function () {
  const [serviceType, setServiceType] = useState("marriage-hall");
  const [city, setCity] = useState("Islamabad");
  // const [submit, setsubmit] = useState(false);
  // const [output, setOutput] = useState([]);
  // useEffect(() => {
  //   if (submit === false) {
  //     console.log("Searching End...");
  //     return;
  //   }
  //   try {
  //     const getData = async function () {
  //       let data = await fetch(
  //         `http://127.0.0.1:8000/${serviceType}?city=${city}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       console.log(
  //         `Searching Start... on host http://127.0.0.1:8000/${serviceType}?city=${city}`
  //       );
  //       data = JSON.stringify(data);
  //       setOutput(data);
  //       setsubmit(false);
  //       console.log(data);
  //     };
  //     getData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [submit]);
  return (
    <div class="mt-[40px] ">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // setsubmit(true);
        }}
        class="max-w-[800px] mx-auto grid grid-cols-[40%_40%_auto] align-middle items-center text-[#4a4a4a] font-[400] shadow-lg shadow-[rgba(0,0,0,.0705882353)] border-[1px] rounded-[100px] z-10 text-[16px]"
      >
        <select
          class="py-[20px] cursor-pointer rounded-l-[100px]  border-r-[#4a4a4a] border-r-[1px] pl-[20px]"
          name="advancedsearch"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        >
          <option disabled>Select city</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Lahore">Lahore</option>
          <option value="Multan">Multan</option>
          <option value="Hafizabad">Hafizabad</option>
        </select>
        <select
          class="py-[15px] outline-none pl-[20px] cursor-pointer"
          name="advancedsearch"
          value={serviceType}
          onChange={(event) => {
            setServiceType(event.target.value);
          }}
        >
          <option disabled>Select Service</option>
          <option value={"marriage-hall"}>Marriage Hall</option>
          <option value={"decoration"}>Decoration Service</option>
          <option value={"parlor"}>Beauty Parlor</option>
          <option value={"catering"}>Catering Service</option>
          <option value={"photography"}>Photographers</option>
        </select>
        <Link
          class="cursor-pointer h-[100%] pt-[20px] text-[16px] text-center rounded-[100px] border-black bg-[#007F73] text-white "
          to={`/services/${serviceType}?city=${city}`}
        >
          Get Started
        </Link>
      </form>
    </div>
  );
};

export default Search;
