import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
  const categoryData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
          <div className="mt-12">
              <h2 className="text-4xl font-bold py-6">Job Category List</h2>
              <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="sm:mx-16 md:grid grid-cols-4 gap-4 mt-6">
          {categoryData.map((data) => (
            <CategoryList key={data.id} data={data}></CategoryList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
