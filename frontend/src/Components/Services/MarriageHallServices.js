import SingleService from "./SingleService";
import { useContext } from "react";
import { MarriageHallContext } from "../../Providers/ServiceProvider";
const MarriageHallServices = function () {
  const { data } = useContext(MarriageHallContext);
  return (
    <>
      {data.map((element) => {
        return <SingleService singleServiceData={element} key={element.id} />;
      })}
    </>
  );
};

export default MarriageHallServices;
