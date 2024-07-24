import useExtractData from "../../Providers/ServiceProvider";
import SingleService from "./SingleService";
const ParlorServices = function () {
  const { beautyParlours } = useExtractData();
  return (
    <>
      {/* {beautyParlours.map((element) => {
        return <SingleService singleServiceData={element} key={element.id} />;
      })} */}
      <h1>Hi</h1>
    </>
  );
};

export default ParlorServices;
