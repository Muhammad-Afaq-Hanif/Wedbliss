import { useContext } from "react";
import { SingleBaseContext } from "../../../../../Providers/Services/BaseService/SingleBaseProvider";

const Hero = function () {
  const { data } = useContext(SingleBaseContext);
  return (
    <div
      className="pt-28 lg:pt-44 pb-28 bg-center bg-cover "
      style={{
        backgroundImage: `url(http://127.0.0.1:8000/uploads/${data.imageCover})`,
      }}
    >
      <div className="text-center text-white  bg-[#007F73]">
        <h3 className="mb-4 text-[30px] font-[600]">{data.name}</h3>
      </div>
    </div>
  );
};

export default Hero;
