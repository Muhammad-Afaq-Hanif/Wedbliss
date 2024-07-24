import useExtractDataSingleService from "../Providers/useExtractDataSingleService";

import SinglePageComponent from "./../Components/SingleService/Main";

const SingleService = function () {
  const { data, setData } = useExtractDataSingleService();
  return (
    <div>
      <SinglePageComponent data={data} setData={setData} />
    </div>
  );
};

export default SingleService;
