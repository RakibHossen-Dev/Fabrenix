"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const { data: data = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/addToCart");
      return res.data;
    },
  });
  const { data: session, status } = useSession();
  const router = useRouter();
  const totalPrice = data.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [paymentMethod, setPaymentMethod] = useState("Stripe");

  const onSubmit = async (formData) => {
    const paymentStatus = paymentMethod === "Cash" ? "confirmed" : "pending";
    const combinedData = {
      ...formData,
      paymentMethod,
      paymentStatus,
      cartData: data,
      status: "pending",
      totalPrice: totalPrice + 20,
      orderDate: new Date().toISOString().split("T")[0],
    };
    console.log("Combined Data:", combinedData);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/order",
        combinedData
      );

      if (response.data.insertedId) {
        console.log("Order Placed Successfully:", response.data);

        if (paymentMethod === "Cash") {
          await axios.delete("http://localhost:3000/api/order");
          console.log("Cart Cleared Successfully!");
          refetch();
        }

        if (paymentMethod === "Cash") {
          router.push("/my-orders");
        } else {
          router.push("/payment");
        }
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="my-10 lg:w-[700px] mx-auto w-11/12">
      <h2 className="text-2xl font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
        DELIVERY <span className="font-bold text-gray-800">INFORMATION</span>
        <span className="w-12 h-[2px] bg-gray-800"></span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Input
            {...register("firstName", { required: true })}
            type="text"
            className="rounded-none"
            placeholder="First name"
          />
          <Input
            {...register("lastName", { required: true })}
            type="text"
            className="rounded-none"
            placeholder="Last name"
          />
        </div>
        <Input
          {...register("email", { required: true })}
          type="email"
          className="rounded-none cursor-not-allowed"
          placeholder="Email"
          defaultValue={session?.user?.email}
        />
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Input
            {...register("street", { required: true })}
            type="text"
            className="rounded-none lg:w-1/2"
            placeholder="Street"
          />
          <div className="border p-2  lg:w-1/2 w-full">
            Amount: {totalPrice + 20} $
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Input
            {...register("city", { required: true })}
            type="text"
            className="rounded-none"
            placeholder="City"
          />
          <Input
            {...register("state", { required: true })}
            type="text"
            className="rounded-none"
            placeholder="State"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Input
            {...register("zipCode", { required: true })}
            type="number"
            className="rounded-none"
            placeholder="Zip code"
          />
          <Input
            {...register("country", { required: true })}
            type="text"
            className="rounded-none"
            placeholder="Country"
          />
        </div>
        <Input
          {...register("phone", { required: true })}
          type="number"
          className="rounded-none"
          placeholder="Phone"
        />

        <h2 className="text-2xl font-light tracking-wide text-gray-600 flex items-center gap-2 mt-5">
          PAYMENT <span className="font-bold text-gray-800">METHOD</span>
          <span className="w-12 h-[2px] bg-gray-800"></span>
        </h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className={`border px-6 py-2 ${
              paymentMethod === "Stripe" ? "bg-black text-white" : ""
            }`}
            onClick={() => setPaymentMethod("Stripe")}
          >
            Stripe
          </button>
          <button
            type="button"
            className={`border px-6 py-2 ${
              paymentMethod === "Cash" ? "bg-black text-white" : ""
            }`}
            onClick={() => setPaymentMethod("Cash")}
          >
            Cash On Delivery
          </button>
        </div>

        <div className="flex justify-end mt-3">
          <Button type="submit" className="rounded-none">
            PLACE ORDER
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
