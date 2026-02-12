import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { DUMMY_API } from "../utils/constant";
const Body = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState(" ");
  const [filterJobs, setFilterJobs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(DUMMY_API);
    const json = await data.json();
    console.log(json);
    setJobs(json);
    setFilterJobs(json);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      const searchRole = jobs.filter((item) =>
        item.job_category.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilterJobs(searchRole);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText, jobs]);
  return (
    <div className="p-4">
      <div className=" justify-center flex m-6">
        <input
          type="text"
          className="border border-black rounded-lg m-5 p-2 px-60 "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <div>
        {filterJobs.map((item) => (
          <div key={item.id}>
            <JobCard jobData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Body;
