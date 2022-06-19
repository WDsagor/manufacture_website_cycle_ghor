import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../share/Loading'

import DeletModal from './DeletModal';
import EmtyOrder from './EmtyOrder';
import OrderItem from './OrderItem';
import PaymentModal from './PaymentModal';

const Myorder = () => {
    const [user] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null);
    const [payment, setPayment] = useState(null);
    const email = user?.email;
    const {data:orders, isLoading, refetch} = useQuery('order', ()=>fetch(`https://morning-headland-71828.herokuapp.com/myorders/${email}`,{
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res=>res.json()))
    if(isLoading){
      return <Loading></Loading>
    }
    if(orders.length === 0){
      return <EmtyOrder></EmtyOrder>
    }
    refetch();

    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Product Image</th>
              <th>Order Quantity</th>
              <th>Price</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
           {
               orders?.map((order, index )=> <OrderItem
               key={order._id}
               order={order}
               index={index}
               setDeleteOrder={setDeleteOrder}
               setPayment ={setPayment}
               ></OrderItem>)
           }
          </tbody>
        </table>
        {
          deleteOrder && <DeletModal deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder} refetch={refetch}  ></DeletModal>
         
        }
        {
           payment && <PaymentModal payment={payment}  setPayment ={setPayment}   ></PaymentModal>
        }
      </div>
    );
};

export default Myorder;