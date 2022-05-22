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
      <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
        <div class="stat text-center items-center">
          <div class="stat-value justify-center text-secondary flex text-6xl py-5"><FaRegFlag/></div>
          <div class="stat-value">59+</div>
          <div class="stat-desc uppercase">Uses Country</div>
        </div>

        <div class="stat text-center">
          <div class="stat-value justify-center text-secondary flex text-6xl py-5"><FaUsers/></div>
          <div class="stat-value">200K+</div>
          <div class="stat-desc uppercase">happy clints</div>
        </div>

        <div class="stat text-center">
        <div class="stat-value justify-center text-secondary flex text-6xl py-5"><FaAward/></div>
          <div class="stat-value">50+</div>
          <div class="stat-desc uppercase">AWWARDS</div>
        </div>
        <div class="stat text-center">
        <div class="stat-value justify-center text-secondary flex text-6xl py-5"><FaHandSparkles/></div>
          <div class="stat-value">12K+</div>
          <div class="stat-desc uppercase">Feedback</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
