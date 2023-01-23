import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const [updateProduct, setUpdateProduct] = useState({});
  const { name, productImg, details, orderQuantity, price } = updateProduct;
  const { id } = useParams();
  const naviget = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `https://manufacture-website-cycle-ghor-server.vercel.app/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUpdateProduct(data);
      });
  }, [id]);

  const onSubmit = async (data) => {
    const order = {
      itemName: name,
      name: user.displayName,
      phone: data.phoneNumber,
      quantity: data.quantity,
      email: user?.email,
      img: productImg,
      price: price,
    };
    try {
      const { data } = await axios.post(
        `https://manufacture-website-cycle-ghor-server.vercel.app/products/${id}`,
        order
      );

      if (!data.success) {
        return toast.error(data.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      reset();
      naviget("/");
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={productImg}
          className="max-w-md rounded-lg shadow-2xl mt-14"
          alt=""
        />
        <div className="flex h-screen justify-center items-center">
          <div className="card w-96 ">
            <div className="card-body">
              <h2 className="text-2xl font-bold  text-primary">
                Purshase Now !
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <span className="label-text text-xl uppercase">
                    Product name{" "}
                    <span className=" text-secondary font-bold">{name}</span>
                  </span>
                  <span className="label-text">{details}</span>
                  <span className="label-text text-xl">Price $ {price}</span>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Order Quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Your order Quantity"
                    className="input input-bordered w-full max-w-xs"
                    {...register("quantity", {
                      required: {
                        value: true,
                        message: "Minimum oder Quantity 300 pcs",
                      },
                      min: {
                        value: `${orderQuantity}`,
                        message: `Minimum oder Quantity ${orderQuantity} pcs`,
                      },
                    })}
                  />
                  <label className="label">
                    {errors?.quantity?.type === "min" && (
                      <span className="label-text-alt text-error">
                        {errors?.quantity?.message}
                      </span>
                    )}
                    {errors?.quantity?.type === "pattern" && (
                      <span className="label-text-alt text-error">
                        {errors?.quantity?.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+88017000000"
                    className="input input-bordered w-full max-w-xs"
                    {...register("phoneNumber", {
                      required: {
                        value: true,
                        message: "Provide your phone number",
                      },
                      maxLength: {
                        value: 11,
                        message: "Provide 11 digit or less than",
                      },
                    })}
                  />
                  <label className="label">
                    {errors?.phoneNumber?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors?.phoneNumber?.message}
                      </span>
                    )}
                    {errors.phoneNumber?.type === "maxLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors?.phoneNumber?.message}
                      </span>
                    )}
                  </label>
                </div>
                <input
                  className="btn w-full max-w-xs btn-primary"
                  type="submit"
                  value="Confirm Order"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
