import useExtractData from "../../Providers/ServiceProvider";
import SingleService from "./SingleService";
const CateringServices = function () {
  const { cateringServicesData } = useExtractData();
  return (
    <>
      {/* {cateringServicesData.map((element) => {
        return <SingleService singleServiceData={element} key={element.id} />;
      })} */}
      \<h1>Hi</h1>
    </>
  );
};

export default CateringServices;
