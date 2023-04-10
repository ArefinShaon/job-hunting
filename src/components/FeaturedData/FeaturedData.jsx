import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const FeaturedData = ({ data }) => {
  const {
    company_logo,
    id,
    job_title,
    company_name,
    location,
      remote_or_onsite,
      fulltime_or_parttime,
      salary
  } = data;
  return (
    <div>
      <div className="card w-50 bg-base-200 shadow-xl md:h-96 mb-12">
        <figure className="md:mr-72">
          <img
            src={company_logo} 
          />
        </figure>
        <div className="card-body">
                  <h2 className="card-title font-bold">{job_title}</h2>
                  <p className="font-medium text-start	">{company_name}</p>
                  <div className="flex gap-12 w-64">
                      <p className="outline outline-primary rounded text-primary">{remote_or_onsite }</p>
                      <p className="outline outline-primary rounded text-primary">{ fulltime_or_parttime}</p>
                  </div>
                  <div className="flex md:gap-8 md:w-96">
                      <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                      <p>Salary: {salary}</p>
                  </div>
          <div className="card-actions mt-6">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedData;
