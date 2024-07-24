import { Link, useParams } from "react-router-dom";
import Loading from "../Loading";

const SingleService = ({ singleServiceData, data, type }) => {
  const { service } = useParams();

  if (
    !singleServiceData ||
    !singleServiceData.vendor ||
    !singleServiceData.vendor.brandName
  ) {
    return <Loading />;
  }

  return (
    <div className="shadow-[13px_13px_13px_-13px_rgba(0,0,0,0.3)] cursor-pointer h-[430px]">
      <Link
        to={
          type
            ? `/services/${type}/${singleServiceData.slug}`
            : `/services/${service}/${singleServiceData.slug}`
        }
      >
        <div className="overflow-hidden">
          <div className="absolute">
            {singleServiceData.available ? (
              <h1 className="bg-[#007F73] py-[4px] px-[12px] my-[10px] ml-[10px] text-[white]">
                Available
              </h1>
            ) : (
              <h1 className="bg-[#00438B] py-[4px] px-[12px] my-[10px] ml-[10px] text-[white]">
                Not Available
              </h1>
            )}
            <div>
              {singleServiceData.discountedPrice > 0 && (
                <h1 className="bg-[#ED4B4B] py-[2px] px-[4px] my-[10px] ml-[10px] text-[white] text-center text-[17px] font-[800]">
                  {Math.round(
                    ((singleServiceData.price -
                      singleServiceData.discountedPrice) /
                      singleServiceData.price) *
                      100
                  )}
                  % OFF
                </h1>
              )}
            </div>
          </div>
          <img
            className="w-[510px] h-[260px] hover:scale-[2] transition-transform duration-500"
            src={`http://127.0.0.1:8000/uploads/${singleServiceData.imageCover}`}
            alt={singleServiceData.name}
          />
        </div>
        <div className="px-[5px] py-[20px] text-[#122642]">
          <h1 className="text-[20px] text-center font-semibold">
            {singleServiceData.name}
          </h1>
          <div className="grid grid-cols-[30%_30%_40%]">
            <div className="pt-[10px]">
              <h1>🏷️ {singleServiceData.price}</h1>
            </div>
            <div className="pt-[10px]">
              <h1>🌟 {singleServiceData.ratingAverage}</h1>
            </div>
            <div className="pt-[10px]">
              <h1>🌍 {singleServiceData.city}</h1>
            </div>
          </div>
          <div className="grid pt-[10px]">
            <h1 className="text-[17px] font-[700] text-[#007F73]">
              👨🏻‍💼 {singleServiceData.vendor.brandName}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleService;
