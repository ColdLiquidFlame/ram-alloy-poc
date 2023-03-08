import React from 'react';
import { useParams } from "react-router-dom";

const Orders = () => {
  let { orderId } = useParams();
  return <div>Order {orderId}</div>;
};

export default Orders;
