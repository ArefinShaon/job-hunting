import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchJobDetails = async () => {
      const response = await fetch("../../../public/featuredData.json");
      const jobs = await response.json();
      const foundJob = jobs.find((job) => job.id === id);
      setJob(foundJob);
    };

    fetchJobDetails();
  }, [id]);

  return (
    <div>
      {job ? (
        <div>
          <div className="bg-base-200 h-48">
            <h2 className="text-4xl font-bold pt-12">Job Details</h2>
          </div>
          <div className="md:flex mt-24 gap-12 ">
                      <div className=" md:w-9/12 px-12 text-start">
                          <p><span className="font-bold">Job Description:</span>{job.job_description }</p>
                          <p className="pt-12"><span className="font-bold ">Job Responsibility:</span>{job.job_responsibility }</p>
                          <p className="pt-12"><span className="font-bold ">Educational Requirements:</span><br />{job.educational_requirements }</p>
                          <p className="pt-12 pb-12"><span className="font-bold ">Experiences:</span><br />{job.experiences }</p>
            </div>
                      <div>
                          <div  className="md:w-96 h-96 bg-base-200 md:text-start p-6">
                              <h3 className="text-xl font-bold">Job Details</h3>
                              <hr />
                              <p className="pt-6"> Salary:{job.salary}</p>
                              <p className="pt-2 pb-6">Job Title:{job.job_title}</p>
                              <h3 className="text-xl font-bold pb-4">Contact Information</h3>
                              <hr />
                              <p className="py-2">Phone:{job.contact_information.phone }</p>
                              <p>Email:{ job.contact_information.email}
                              </p>
                              <p className="py-2">Address:{job.contact_information.address}</p>
                             
                          </div>
                          <button className="btn-primary mt-6 mb-6">Apply Now</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetails;
