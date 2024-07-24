import { Link } from "react-router-dom";
const SingleService = function ({ singleServiceData }) {
  return (
    <div class="shadow-[13px_13px_13px_-13px_rgba(0,0,0,0.3)] cursor-pointer h-[400px]">
      <Link to={`/services/marriage-hall/${singleServiceData.slug}`}>
        <div class="overflow-hidden">
          <img
            class="w-[510px] h-[260px] hover:scale-[2] transition-transform duration-500"
            src={`http://127.0.0.1:8000/uploads/${singleServiceData.imageCover}`}
            alt={singleServiceData.name}
          />
        </div>
        <div class="px-[20px] py-[15px] text-[#122642]">
          <h1 class="text-[20px] font-semibold">{singleServiceData.name}</h1>
          <div className="grid grid-cols-2">
            <div class="flex gap-[10px] items-center pt-[10px]">
              <img
                src="/images/Home/dollar.svg"
                alt="Dollar"
                height={"25px"}
                width={"25px"}
              />
              <h1>{singleServiceData.price}</h1>
            </div>
            <div class="flex gap-[10px] items-center pt-[10px]">
              <img
                src="/images/Home/map.svg"
                alt="Dollar"
                height={"25px"}
                width={"25px"}
              />
              <h1>{singleServiceData.city}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleService;
