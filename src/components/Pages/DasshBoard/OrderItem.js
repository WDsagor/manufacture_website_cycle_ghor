import React from "react";
import { useNavigate } from "react-router-dom";

const OrderItem = ({order , setDeleteOrder }) => {
  const {_id,itemName, quantity, img, price}= order
  const naviget = useNavigate()


const itemUpdate = id =>{
  naviget(`/payment/${id}`)

} 
  return (
    <tr>
      <th>{itemName}</th>
      <td><img className="mask mask-mask-square w-12 h-12" src={img} alt={itemName}/></td>
      <td>{quantity}</td>
      <th >$ {price}</th>
      <td><button className="btn btn-sm" onClick={()=>itemUpdate(_id)}>Pay Now</button> <label onClick={()=>setDeleteOrder(order)} htmlFor="delete-modal" class="btn modal-button btn-sm">Delete</label></td>
    </tr>
  );
};

export default OrderItem;
