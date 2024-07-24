import SingleMarriageHallProvider from "../../../Providers/Services/MarriageHall/SingleMarriageHallProvider";
import SinglePage from "../../../Components/Services/MarriageHall/SinglePage/index";

const SingleService = function () {
  return (
    <SingleMarriageHallProvider>
      <SinglePage />
    </SingleMarriageHallProvider>
  );
};

export default SingleService;
