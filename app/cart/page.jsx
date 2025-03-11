"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/addToCart");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  const totalPrice = data.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );

  // const totalPrice = data.map(price =>)
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
        YOUR <span className="font-bold text-gray-800">CART</span>
        <span className=" w-12 h-[2px] bg-gray-800"></span>
      </h2>

      {data.map((cart) => (
        <div key={cart._id} className="border p-4 my-5 max-w-[1000px] mx-auto">
          <div className="flex justify-between items-center ">
            <div className="flex  items-center gap-8">
              <img src={cart.image} className="w-20 h-20" alt="" />
              <div>
                <h3 className="text-lg">{cart.productName}</h3>
                <p className="text-sm">SIZE: {cart.size}</p>
                <p className="text-sm">COLOR: {cart.color}</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-8">
              <p className="text-xl font-semibold">${cart.price}</p>
              <Input
                type="number"
                defaultValue={cart.quantity}
                className="w-16 text-center"
              />
              <FaTrashAlt></FaTrashAlt>
            </div>
          </div>
        </div>
      ))}
      <div className="max-w-[1000px] mx-auto mt-6">
        <div className="flex flex-col justify-end  max-w-[400px] ml-auto">
          <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
            CART <span className="font-bold text-gray-800">TOTAL</span>
            <span className=" w-12 h-[2px] bg-gray-800"></span>
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b">
              <p>Subtotal</p>
              <p>{totalPrice}$</p>
            </div>
            <div className="flex justify-between items-center border-b">
              <p>Delivery Free</p>
              <p>20$</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Total Amount</p>
              <p>{totalPrice + 20}$</p>
            </div>
            <Button className="uppercase rounded-none">Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
