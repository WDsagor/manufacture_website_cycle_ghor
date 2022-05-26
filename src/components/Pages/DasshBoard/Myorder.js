import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useOrder from '../../hook/useOreder';
import OrderItem from './OrderItem';

const Myorder = () => {
    const [user] = useAuthState(auth);
    const [orders ] = useOrder();
    const result = orders.filter(order => order?.email === user?.email);

    console.log(result);
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
               result.map((order, index )=> <OrderItem
               key={order._id}
               order={order}
               index={index}
               ></OrderItem>)
           }
          </tbody>
        </table>
      </div>
    );
};

export default Myorder;