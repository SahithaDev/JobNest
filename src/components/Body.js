import { useState, useEffect } from "react";
import { DUMMY_API } from "../utils/constant";
const Body = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(DUMMY_API);
    const json = await data.json();
    console.log(json);
    setJobs(json);
  };
  return (
    <div>
      {jobs.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
export default Body;
