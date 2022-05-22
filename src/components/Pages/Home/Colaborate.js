import React from "react";
import img from "../../../Asset/about-6.png";

const Colaborate = () => {
  return (
    <div class="hero">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={img} class="max-w-sm rounded-lg" alt="" />
        <div>
          <h1 class="text-5xl font-bold">Easy to Colaborate with Company</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Colaborate;
