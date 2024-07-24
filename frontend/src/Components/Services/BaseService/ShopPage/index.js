import SingleService from "./SingleService";
import { useContext } from "react";
import { BaseServiceContext } from "../../../../Providers/Services/BaseService/BaseServiceProvider";
const BaseService = function () {
  const { data } = useContext(BaseServiceContext);
  return (
    <>
      {data.map((element) => {
        return <SingleService singleServiceData={element} key={element.id} />;
      })}
    </>
  );
};

export default BaseService;
