import React, { useState } from "react";
import ApplyBanner from "../ApplyBanner/ApplyBanner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
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
              <div className="border mt-12 rounded p-6 flex gap-12	">
              <img className="w-64 bg-base-200 rounded-xl p-12"
            src={job.company_logo} 
          />
                <div className="flex justify-between gap-64 items-center	">
                  <div>
                  <h2 className="card-title font-bold">{job.job_title}</h2>
          <p className="font-medium text-start pb-6">{job.company_name}</p>
          <div className="flex gap-12 w-64 pb-6">
            <p className="outline outline-primary rounded text-primary p-2">{job.remote_or_onsite }</p>
            <p className="outline outline-primary rounded text-primary p-2">{job.fulltime_or_parttime}</p>
                    </div>
                    <div className="flex md:gap-8 md:w-96">
            <p><FontAwesomeIcon icon={faLocationDot} /> {job.location}</p>
            <p>Salary: {job.salary}</p>
          </div>
                  </div>
                  <div>
                  <button className="btn btn-primary">
            View Details
            </button>
                  </div>
                </div>
             </div>
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
