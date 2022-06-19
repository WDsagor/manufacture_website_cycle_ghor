import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmtyOrder = () => {
    const naviget = useNavigate()
    return (
        <div className="hero py-20">
        <div className="hero-content text-center text-base-300">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold uppercase">Order Not Avaiable .....</h1>
            <p className="py-6">Please Order Now</p>
            <button onClick={()=>naviget('/')} className="btn btn-primary">go to home</button>
          </div>
        </div>
      </div>
    );
};

export default EmtyOrder;