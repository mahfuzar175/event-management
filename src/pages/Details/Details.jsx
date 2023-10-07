import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailItems from "./DetailItems";

const Details = () => {
  const [item, setitem] = useState();
  const { id } = useParams();
  const services = useLoaderData();

  useEffect(() => {
    const findItem = services?.find((item) => item.id == id);
    setitem(findItem);
  }, [id, services]);

  console.log(item);
  

  return (
    <div>
      <DetailItems item={item}></DetailItems>
    </div>
  );
};

export default Details;
