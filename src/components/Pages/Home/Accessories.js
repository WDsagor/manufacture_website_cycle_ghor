import React from "react";

const Accessories = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto py-10">
      <h1 className=" text-center text-4xl font-bold text-secondary py-10">Accessories</h1>
      <div className="px-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-between">
              <p className=" text-xl font-bold">Price:</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
