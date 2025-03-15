"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/order");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-2xl font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
        MY <span className="font-bold text-gray-800">ORDERS</span>
        <span className="w-12 h-[2px] bg-gray-800"></span>
      </h2>

      {data.map((order) => (
        <div key={order.id} className="border rounded-lg p-4 mb-5">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-red-100 capitalize bg-red-500 rounded-full text-sm px-3">
              {order.status}
            </p>
            |<p>{order.orderDate}</p>
          </div>
          <div className="flex gap-3">
            <img
              src={order.cartData[0].image}
              className="w-20 h-20 rounded-lg"
              alt="logo"
            />
            <div className="space-y-1">
              <p className="text-red-400">Order Id : {order._id}</p>
              {order.cartData.map((data) => (
                <span>{data.productName}, </span>
              ))}
              <p>${order.totalPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
