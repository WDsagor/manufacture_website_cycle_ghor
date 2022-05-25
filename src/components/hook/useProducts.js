import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products , setproducts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setproducts(data))
    },[]);
    return [products , setproducts];

};

export default useProducts;