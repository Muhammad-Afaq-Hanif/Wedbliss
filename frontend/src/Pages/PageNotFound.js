import { Link } from "react-router-dom";
const PageNotFound = function () {
  return (
    <div className="mt-[100px]">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <div>
              <Link to="/">
                <button className="rounded-[1px] text-[16px] text-[#007F73] font-semibold border-[2px] px-[20px] py-[8px] border-[#007F73] hover:text-white hover:bg-[#007F73]">
                  Back to HomePage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
