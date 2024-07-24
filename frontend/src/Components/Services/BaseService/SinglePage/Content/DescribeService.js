import Details from "./Details";
import SliderGallery from "./SliderGallery";

const DescribeService = function () {
  return (
    <div class="border rounded-md border-[black] dark:border-neutral-600/80">
      {/* {<SliderGallery />} */}
      <div class="p-6">{<Details />}</div>
    </div>
  );
};

export default DescribeService;
