import React from "react";
import image from "../../assets/All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm lg:max-w-none lg:w-1/2" />
          <div className="text-left lg:ml-48">
            <h1 className="text-5xl font-bold  ">One Step Closer To Your <br /><span className="text-primary">Dream Job</span></h1>
            <p className="py-6 ">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
