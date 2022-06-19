import React from "react";


const OrderItem = ({order , setDeleteOrder, setPayment, refetch }) => {
  const { itemName, quantity, img, price, transactionId}= order

  return (
    <tr>
      <th>{itemName}</th>
      <td><img className="mask mask-mask-square w-12 h-12" src={img} alt={itemName}/></td>
      <td>{quantity}</td>
      <th >$ {price}</th>
      <td>
        { transactionId ? <p className=" text-success"><span className=" text-lg font-medium uppercase text-center">Paid</span> <br/> Trax ID: {transactionId}</p>: <><label className="btn modal-button btn-sm" onClick={()=>setPayment(order)} htmlFor="payment-modal">Pay Now</label> <label onClick={()=>setDeleteOrder(order)} htmlFor="delete-modal" className="btn modal-button btn-sm">Delete</label></>}
      </td>
    </tr>
  );
};

export default OrderItem;
