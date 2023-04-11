import React, { useState } from "react";
import ApplyBanner from "../ApplyBanner/ApplyBanner";

const ApplyJob = () => {
  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );

  return (
    <div>
      <ApplyBanner></ApplyBanner>
      <div>
      {savedJobs.length > 0 ? (
        <ul>
          {savedJobs.map((job) => (
            <li key={job.id}>
              <h3>{job.job_title}</h3>
              <p>{job.company_name}</p>
              <p>{job.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved jobs.</p>
      )}
      </div>
    </div>
  );
};

export default ApplyJob;
