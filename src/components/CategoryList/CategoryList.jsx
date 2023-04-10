import React from "react";


const CategoryList = ({ data }) => {
  const { logo, name, jobsAvailable } = data;
  return (
    <div>
      <div className="card w-64 h-64 bg-base-200 shadow-xl mx-auto mt-4">
        <figure className=" p-6 mr-16">
          <img
            src={logo}
         
          />
        </figure>
        <div className="card-body items-center text-center">
                  <h2 className="card-title">{name}</h2>
                  <p>{ jobsAvailable} Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
