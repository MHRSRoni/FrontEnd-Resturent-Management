import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../App";

const VisitorSection = () => {
  const [visitor, setVisitor] = useState();

  useEffect(() => {
    console.log("request");
    axios
      .get(`${BASE_URL}/visitorCount`)
      .then((data) => {
        setVisitor(data?.data?.data?.visitorCount);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-12">
        <p className="text-3xl uppercase text-center text-white">
          Total Visitor : {visitor}
        </p>
      </div>
    </div>
  );
};

export default VisitorSection;
