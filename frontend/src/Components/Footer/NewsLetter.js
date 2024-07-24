import NewsLetterForm from "./NewsLetterForm";

const NewsLetter = function () {
  return (
    <div className="">
      <h1 className="text-[15px] font-semibold text-[#122642]">
        Contact us to get best deals
      </h1>
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="border-r-[1px] border-r-[#122642]">
          <h2 className="text-[15px] font-semibold text-[#122642] pt-[10px]">
            For Buyers
          </h2>
          <a
            className="text-[#122642] text-[15px] "
            href="mailto:vendor@wedbliss.com"
          >
            buyers@wedbliss.com
          </a>
          <br></br>
          <a className="text-[#122642] text-[15px]" href="tel:+92 3066298090">
            +92 3307425096
          </a>
        </div>
        <div className="">
          <h2 className="text-[15px] font-semibold text-[#122642] pt-[10px]">
            For Vendors
          </h2>
          <a
            className="text-[#122642] text-[15px] "
            href="mailto:vendor@wedbliss.com"
          >
            vendor@wedbliss.com
          </a>
          <br></br>
          <a className="text-[#122642] text-[15px]" href="tel:+92 3066298090">
            +92 3066298090
          </a>
        </div>
      </div>
      <NewsLetterForm />
    </div>
  );
};

export default NewsLetter;
