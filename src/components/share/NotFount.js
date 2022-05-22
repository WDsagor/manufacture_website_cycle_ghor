import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../../Asset/error-404-message.png"

const NotFount = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <div class="card  bg-base-100">
      <figure class="px-10 pt-10">
        <img
          src={NotFound}
          alt="NotFound"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Page Not Found</h2>
        <div class="card-actions">
          <Link to='/' class="btn btn-primary">Goto Home Page</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NotFount;
