import SinglePage from "../../../Components/Services/BaseService/SinglePage/index";
import SingleBaseProvider from "../../../Providers/Services/BaseService/SingleBaseProvider";
const SingleService = function () {
  return (
    <SingleBaseProvider>
      <SinglePage />
    </SingleBaseProvider>
  );
};

export default SingleService;
