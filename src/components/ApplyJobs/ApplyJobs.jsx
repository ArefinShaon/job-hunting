import React, { useState, useEffect } from "react";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("job");
    if (storedJobs) {
      setAppliedJobs(JSON.parse(storedJobs));
    }
  }, []);

  return (
    <div>
      <h2>Applied Jobs</h2>
      {appliedJobs.length > 0 ? (
        <ul>
          {appliedJobs.map((job) => (
            <li key={job.id}>
              <h3>{job.job_title}</h3>
              <p>{job.company_name}</p>
              <p>{job.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs applied yet!</p>
      )}
    </div>
  );
};

export default AppliedJobs;
