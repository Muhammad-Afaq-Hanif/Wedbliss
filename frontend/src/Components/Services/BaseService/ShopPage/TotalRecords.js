import { useContext } from "react";
import { BaseServiceContext } from "../../../../Providers/Services/BaseService/BaseServiceProvider";

const TotalRecords = function () {
  const { originalData, filters } = useContext(BaseServiceContext);

  // Calculate the range of records being shown
  const startRecord = (filters.currentPage - 1) * filters.recordsPerPage + 1;
  const endRecord = Math.min(
    filters.currentPage * filters.recordsPerPage,
    originalData
  );

  return (
    <div>
      <h1 className="text-[#36454F] mt-[-10px] font-[600] text-[17px] align-middle ">
        Showing {startRecord} - {endRecord} of {originalData} Total Records
      </h1>
    </div>
  );
};

export default TotalRecords;
