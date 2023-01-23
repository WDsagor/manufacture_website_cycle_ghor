import { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const useOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://manufacture-website-cycle-ghor-server.vercel.app/Orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, []);
  return [orders, setOrders];
};

export default useOrder;
