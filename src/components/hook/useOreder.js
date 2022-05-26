import { useEffect, useState } from 'react';

const useOrder = () => {
   
    const [orders , setOrders] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/Orders")
        .then(res => res.json())
        .then(data => setOrders(data))
    },[orders]);
    return [orders , setOrders];

};

export default useOrder;