import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  const totalPrice = 500;
  return (
    <div className="my-10 lg:w-[1000px] mx-auto w-11/12">
      <div className="flex md:flex-row flex-col gap-8 items-center">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
            DELIVERY{" "}
            <span className="font-bold text-gray-800">INFORMATION </span>
            <span className=" w-12 h-[2px] bg-gray-800"></span>
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Input
                type="text"
                className="rounded-none"
                placeholder="First name"
              />
              <Input
                type="text"
                className="rounded-none"
                placeholder="Last name"
              />
            </div>
            <Input type="email" className="rounded-none" placeholder="Email" />
            <Input type="text" className="rounded-none" placeholder="Street" />
            <div className="flex flex-col md:flex-row items-center gap-3">
              <Input type="text" className="rounded-none" placeholder="City" />
              <Input type="text" className="rounded-none" placeholder="State" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <Input
                type="number"
                className="rounded-none"
                placeholder="Zip code"
              />
              <Input
                type="text"
                className="rounded-none"
                placeholder="Country"
              />
            </div>
            <Input type="number" className="rounded-none" placeholder="Phone" />
          </form>
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
            CART <span className="font-bold text-gray-800">TOTAL</span>
            <span className=" w-12 h-[2px] bg-gray-800"></span>
          </h2>
          <div>
            <div className="flex justify-between items-center py-2 border-b">
              <p>Subtotal</p>
              <p>{totalPrice}$</p>
            </div>
            <div className="flex justify-between items-center  py-2 border-b">
              <p>Delivery Free</p>
              <p>20$</p>
            </div>
            <div className="flex justify-between items-center  py-2  mb-5">
              <p>Total Amount</p>
              <p>{totalPrice + 20}$</p>
            </div>
          </div>

          <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
            PAYMENT <span className="font-bold text-gray-800">METHOD</span>
            <span className=" w-12 h-[2px] bg-gray-800"></span>
          </h2>
          <div className="flex items-center gap-3">
            <button className="border px-6 py-2 ">Stripe</button>
            <button className="border px-6 py-2 ">Cash On Delevery</button>
          </div>
          <div className="flex justify-end mt-3">
            <Button className="rounded-none">PLACE ORDER</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
