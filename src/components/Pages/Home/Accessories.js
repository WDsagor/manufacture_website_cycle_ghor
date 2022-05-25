import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hook/useProducts";
import Products from "./Products";

const Accessories = () => {
  const [products] = useProducts()
  const viewUpDateProducts = products.slice(-6);
  const naviget = useNavigate();

    const handleBuyNow = id => {
        naviget(`/products/${id}`);
        console.log(id);
    }
  return (
    <div className=" max-w-screen-2xl mx-auto py-10">
      <h1 className=" text-center text-4xl font-bold text-secondary pt-10">Accessories</h1>
      <h1 className=" text-center text-2xl uppercase text-primary pb-10">Our Manufactureing Accessories</h1>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
        {
          viewUpDateProducts.map( product => <Products 
          key={product._id}
          product = { product}
          handleBuyNow ={handleBuyNow}
          
          >

          </Products>)
        }
      </div>
    </div>
  );
};

export default Accessories;
