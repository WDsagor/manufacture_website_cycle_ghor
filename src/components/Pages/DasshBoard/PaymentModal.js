import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LC0INDhfggtVpiiDgZkVxQKtGTVlV8C6RuApP8NqdbkUFA7o7I9V3cuOEKqjnP8KKr3wYmUkWYlRwVK51vJgtUU004huLb8WS"
);

const PaymentModal = ({ payment, setPayment}) => {
  
  return (
    <div>
      <input type="checkbox" id="payment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="payment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg"> Payment item 
            <span className=" text-primary uppercase"> {payment?.itemName} </span>
          </h3>
          <p className="py-4">
            If you want to payment click to <span className="text-primary">Pay Now</span> or you can't payment click
            on cross ..
          </p>
          <p className=" uppercase font-semibold pb-5">Amount <span className="text-primary text-xl">$ {payment?.price}</span></p>
          <Elements stripe={stripePromise} className="modal-action">
            <CheckoutForm  payment={payment} setPayment={setPayment}/>
          </Elements>
          
          </div>
        </div>
      </div>
  );
};

export default PaymentModal;
