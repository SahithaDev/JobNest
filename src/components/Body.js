import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { DUMMY_API } from "../utils/constant";
const Body = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState(" ");
  const [filterJobs, setFilterJobs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

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
      setSuggestions(searchRole.slice(0, 7));
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText, jobs]);
  return (
    <div className="p-4">
      <div className=" justify-center flex m-6 relative">
        <input
          type="text"
          className="border border-black rounded-lg p-2 w-[450px] "
          value={searchText}
          placeholder="Search jobs..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {suggestions.length >0 && (
            <div className="absolute top-full left-0 mt-1 w-[450px] bg-white border border-gray-300 rounded shadow-lg z-10">
              {suggestions.map((job) => (
                <div
                  key={job.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchText(job.job_category);
                    setSuggestions([]);
              }}
                ><p className="font-medium">{job.job_category}</p>
                <p className="">{job.company}</p></div>
              ))}
            </div>,
          )}
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
