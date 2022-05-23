import React from "react";
import LoadingImg from "../../Asset/spinnervlll.gif";

const Loading = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
        <div className=" lg:w-24 w-16">
          <img src={LoadingImg} alt="" />
        </div>
      </div>
  );
};

export default Loading;
