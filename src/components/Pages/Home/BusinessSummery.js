import React from "react";
import { FaRegFlag, FaUsers, FaAward, FaHandSparkles } from "react-icons/fa";

const BusinessSummery = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto py-10">
      <h1 className=" text-center text-4xl font-bold text-primary pt-10 uppercase">
        Facts For Choosing Us 
      </h1>
      <p className=" uppercase text-center text-xl font-bold text-secondary pb-8">Try to understand users expectation</p>
      <div className=" w-9/12 mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
        <div className="stat text-center items-center">
          <div className="stat-value justify-center text-secondary flex text-6xl py-5"><FaRegFlag/></div>
          <div className="stat-value">59+</div>
          <div className="stat-desc uppercase">Uses Country</div>
        </div>

        <div className="stat text-center">
          <div className="stat-value justify-center text-secondary flex text-6xl py-5"><FaUsers/></div>
          <div className="stat-value">200K+</div>
          <div className="stat-desc uppercase">happy clints</div>
        </div>

        <div className="stat text-center">
        <div className="stat-value justify-center text-secondary flex text-6xl py-5"><FaAward/></div>
          <div className="stat-value">50+</div>
          <div className="stat-desc uppercase">AWWARDS</div>
        </div>
        <div className="stat text-center">
        <div className="stat-value justify-center text-secondary flex text-6xl py-5"><FaHandSparkles/></div>
          <div className="stat-value">12K+</div>
          <div className="stat-desc uppercase">Feedback</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
