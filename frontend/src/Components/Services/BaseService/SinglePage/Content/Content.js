import DescribeService from "./DescribeService";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import ReviewProvider from "../../../../../Providers/Services/BaseService/ReviewProvider";

const Content = function () {
  return (
    <div>
      <DescribeService />
      <ReviewProvider>
        <ReviewForm />
        <Reviews />
      </ReviewProvider>
    </div>
  );
};

export default Content;
