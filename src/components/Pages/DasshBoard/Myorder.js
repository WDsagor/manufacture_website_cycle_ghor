import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../share/Loading'

import DeletModal from './DeletModal';
import OrderItem from './OrderItem';

const Myorder = () => {
    const [user] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null);
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

    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
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
               ></OrderItem>)
           }
          </tbody>
        </table>
        {
          deleteOrder && <DeletModal deleteOrder={deleteOrder} refetch={refetch} ></DeletModal>
        }
      </div>
    );
};

export default Myorder;