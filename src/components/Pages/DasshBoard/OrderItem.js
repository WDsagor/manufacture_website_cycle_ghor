import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const OrderItem = ({order}) => {
  const {_id,itemName, quantity, img, price}= order
  const naviget = useNavigate()

const deleteItem = id =>{
  const confirm = window.confirm("Are you sure to delete this item ?")
  if(confirm){
    (async () => {
      const { data } = await axios.delete(`http://localhost:5000/orders/${id}`);
      
      if(!data.success) return toast.error(data.error, {
        position: toast.POSITION.TOP_CENTER
      })
  
      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER
      })
      
    })()
  }
} 
const itemUpdate = id =>{
  naviget(`/update/${id}`)

} 
  return (
    <tr>
      <th>{itemName}</th>
      <td><img className="mask mask-mask-square w-12 h-12" src={img} alt={itemName}/></td>
      <td>{quantity}</td>
      <th >$ {price}</th>
      <td><button className="btn btn-sm" onClick={()=>itemUpdate(_id)}>Pay Now</button> <button for="my-modal-3" class="btn btn-sm" onClick={()=> deleteItem(_id)}>Delete</button></td>
    </tr>
  );
};

export default OrderItem;
