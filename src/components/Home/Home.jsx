import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedData from "../FeaturedData/FeaturedData";

const Home = () => {
  const categoryData = useLoaderData();
  const [featuredData, setFeaturedData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    fetch("../../../public/featuredData.json")
      .then((response) => response.json())
      .then((data) => setFeaturedData(data));
  }, []);

  useEffect(() => {
    setDisplayedData(featuredData.slice(0, 4));
  }, [featuredData]);

  const handleShowMore = () => {
    setDisplayedData(featuredData);
  };

  return (
    <div>
      <Banner></Banner>
      <div className="mt-12">
        <h2 className="text-4xl font-bold py-6">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="sm:mx-16 md:grid grid-cols-4 gap-4 mt-6">
          {categoryData.map((data) => (
            <CategoryList key={data.id} data={data}></CategoryList>
          ))}
        </div>
      </div>
          <div className="mt-12">
              <h2 className="text-4xl font-bold py-6">Featured Jobs</h2>
              <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="sm:mx-16 md:grid grid-cols-2 gap-4 mt-6">
          {displayedData.map((data) => (
            <FeaturedData key={data.id} data={data}></FeaturedData>
          ))}
        </div>
        {displayedData.length !== featuredData.length && (
          <button
            className="btn btn-primary w-3/12 m-6"
            onClick={handleShowMore}
          >
           See all Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
