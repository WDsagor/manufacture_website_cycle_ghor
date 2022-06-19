import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../hook/useAdmin";
import useProducts from "../../hook/useProducts";
import Products from "./Products";

const Accessories = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  const [products] = useProducts()
  const viewUpDateProducts = products.slice(-8);
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
          admin={admin}
          
          >

          </Products>).reverse()
        }
      </div>
    </div>
  );
};

export default Accessories;
