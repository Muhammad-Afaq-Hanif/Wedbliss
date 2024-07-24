import useExtractData from "../../Providers/ServiceProvider";
import SingleService from "./SingleService";
const PhotographyServices = function () {
  const { photographersData } = useExtractData();
  return (
    <>
      {/* {photographersData.map((element) => {
        return <SingleService singleServiceData={element} key={element.id} />;
      })} */}
      <h1>Hi</h1>
    </>
  );
};

export default PhotographyServices;
