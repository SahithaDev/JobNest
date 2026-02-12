const JobCard = (props) => {
  const { jobData } = props;
  const {
    job_category,
    company,
    location,
    salary_from,
    salary_to,
    updated_at,
  } = jobData;
  return (
    <div className="border rounded-lg p-4 gap-10 mb-6">
      <div className="font-bold text-lg py-2">{job_category}</div>
      <div>{company}</div>
      <div>{location}</div>
      <div>
        {salary_from} - {salary_to}
      </div>
      <div>{updated_at}</div>
    </div>
  );
};
export default JobCard;
