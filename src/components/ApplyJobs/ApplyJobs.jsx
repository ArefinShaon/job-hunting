import React, { useState } from "react";
import ApplyBanner from "../ApplyBanner/ApplyBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ApplyJob = () => {
  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );
  const [filterOption, setFilterOption] = useState("");

  const handleFilterBy = (option) => {
    setFilterOption(option);
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const filteredJobs = option ? jobs.filter(
      (job) => job.remote_or_onsite === option
    ) : jobs;
    setSavedJobs(filteredJobs);
  };
  

  return (
    <div>
      <ApplyBanner></ApplyBanner>
      <div className="dropdown md:ms-96 md:ps-96 mt-12">
        <label tabIndex={0} className="btn m-1">
          Filter By
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={() => handleFilterBy("Remote")}>Remote</a>
          </li>
          <li>
            <a onClick={() => handleFilterBy("Onsite")}>On-site</a>
          </li>
        </ul>
      </div>
      <div>
        {savedJobs.length > 0 ? (
          <ul>
            {savedJobs.map((job) => (
              <li key={job.id}>
                <div className="border mt-12 rounded p-6 md:flex gap-12 ">
                  <img
                    className="w-64 bg-base-200 rounded-xl p-12"
                    src={job.company_logo}
                  />
                  <div className="md:flex justify-between gap-64 items-center ">
                    <div>
                      <h2 className="card-title font-bold">{job.job_title}</h2>
                      <p className="font-medium text-start pb-6">
                        {job.company_name}
                      </p>
                      <div className="flex gap-12 w-64 pb-6">
                        <p className="outline outline-primary rounded text-primary p-2">
                          {job.remote_or_onsite}
                        </p>
                        <p className="outline outline-primary rounded text-primary p-2">
                          {job.fulltime_or_parttime}
                        </p>
                      </div>
                      <div className="flex md:gap-8 md:w-96 gap-6  ">
                        <p>
                          <FontAwesomeIcon icon={faLocationDot} />{" "}
                          {job.location}
                        </p>
                        <p>Salary: {job.salary}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        className="btn btn-primary"
                        to={`/details/${job.id}`}
                      >
                        View Details
                      </Link>
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
