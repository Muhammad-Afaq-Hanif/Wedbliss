import useExtractData from "../../Providers/ServiceProvider";
import SingleService from "./SingleService";
const DecorationServices = function () {
  const { decoratorsData } = useExtractData();
  return (
    <>
      {/* {decoratorsData.map((element) => {
        return <SingleService singleServiceData={element} key={element.id} />;
      })} */}
      <h1>Hi</h1>
    </>
  );
};

export default DecorationServices;
