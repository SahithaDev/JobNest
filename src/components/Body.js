import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { DUMMY_API } from "../utils/constant";
const Body = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState([]);
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
    <div className="p-4">
      <div className="py-4 m-4">
        <input
          type="text"
          className="border border-black rounded m-5 "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button>Search</button>
      </div>
      <div>
        {jobs.map((item) => (
          <div key={item.id}>
            <JobCard jobData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Body;
