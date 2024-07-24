import { useAddNewServiceContext } from "../../../../Providers/Services/BaseService/AddNewServiceProvider";
import Base from "./Base";
import Map from "./Map";

const AddCatering = () => {
  const {
    serviceName,
    setServiceName,
    seating,
    setSeating,
    setPlates,
    waiters,
    setWaiters,
    plates,
    setSubmit,
  } = useAddNewServiceContext();

  return (
    <div>
      <section className="max-w-5xl p-6 mx-auto bg-[white] rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-[40px] font-bold text-[black] capitalize dark:text-white text-center">
          Add new Catering Service
        </h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-black dark:text-gray-200">
                Service Name
              </label>
              <input
                required
                value={serviceName}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
                onChange={(event) => setServiceName(event.target.value)}
              />
            </div>
            <div>
              <label className="text-black dark:text-gray-200">Plates</label>
              <select
                defaultValue={true}
                value={plates}
                onChange={(event) => setPlates(event.target.value)}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 cursor-pointer dark:border-gray-600 focus:outline-none"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div>
              <label className="text-black dark:text-gray-200">Seating</label>
              <select
                defaultValue={true}
                value={seating}
                onChange={(event) => setSeating(event.target.value)}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 cursor-pointer dark:border-gray-600 focus:outline-none"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div>
              <label className="text-black dark:text-gray-200">Waiters</label>
              <select
                defaultValue={true}
                value={waiters}
                onChange={(event) => setWaiters(event.target.value)}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 cursor-pointer dark:border-gray-600 focus:outline-none"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div>
              <label className="text-black dark:text-gray-200">Packages</label>
              <select
                defaultValue={true}
                value={waiters}
                onChange={(event) => setWaiters(event.target.value)}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 cursor-pointer dark:border-gray-600 focus:outline-none"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
          <Base />
          <div className="pt-[30px]">
            <label className="text-black pb-[10px]">
              Marriage Hall Location
            </label>
            <Map />
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => {
                setSubmit(true);
              }}
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[black] rounded-md hover:bg-[#007F73] focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCatering;
