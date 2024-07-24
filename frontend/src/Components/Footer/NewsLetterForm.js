const NewsLetterForm = function () {
  return (
    <form>
      <h1 className="py-[8px]">Get Latest Blog Alerts</h1>
      <div className="grid grid-cols-[85%_15%]">
        <input
          type="email"
          placeholder="&nbsp;&nbsp;Email*"
          className="border-[1px] border-[#122642]"
        />
        <input
          type="submit"
          className="bg-[#007F73] hover:pointer text-white px-[8px] py-[6px] text-[15px] font-semibold"
        />
      </div>
    </form>
  );
};

export default NewsLetterForm;
