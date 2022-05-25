import React from 'react';



const products = ({product, handleBuyNow }) => {
    
    const {_id, name, price, productImg, orderQuantity, details} = product;
    
    return (
        <div className="card w-96 md:w-80 lg:72 xl:w-64 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src={productImg}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className=' text-justify'>{details}</p>
          <h2 className=" text-lg text-secondary">Minimum order {orderQuantity} pcs</h2>
          <div className="card-actions justify-between">
            <p className=" text-xl font-bold">Price $ { price}</p>
            <button onClick={()=>handleBuyNow(_id)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default products;