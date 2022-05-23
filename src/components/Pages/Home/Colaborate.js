import React from "react";
import img from "../../../Asset/about-6.png";

const Colaborate = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-sm rounded-lg" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Easy to Colaborate with Company</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Colaborate;
