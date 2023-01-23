import React, { useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import Loading from "../../share/Loading";

const CheckoutForm = ({ payment, setPayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, price, itemName, email } = payment;

  useEffect(() => {
    fetch(
      "https://manufacture-website-cycle-ghor-server.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    if (processing) {
      return <Loading></Loading>;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: payError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: itemName,
            email: email,
          },
        },
      }
    );

    if (payError) {
      setCardError(payError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Congrats! Your payment is completed.");

      //store payment on database
      const payment = {
        transactionId: paymentIntent.id,
      };
      console.log(_id);
      fetch(
        `https://manufacture-website-cycle-ghor-server.vercel.app/products/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
    console.log(paymentMethod);
  };
  useEffect(() => {
    if (transactionId) {
      setPayment(null);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError ? (
        <p>
          <small className=" text-error">{cardError}</small>
        </p>
      ) : (
        ""
      )}
      <input
        className="btn btn-md btn-success text-white mt-5"
        value="Pay now"
        type="submit"
        disabled={!stripe || !elements || !clientSecret || success}
      />
    </form>
  );
};
export default CheckoutForm;
