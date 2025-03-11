"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { data: session, status } = useSession();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  // console.log(session.user.email);
  const router = useRouter();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/manageProduct/${id}`
        );
        setData(res.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!data) return <p>Loading...</p>;
  const handleWishList = async () => {
    const wishlistItem = {
      email: session.user.email,
      productId: data?._id,
      productName: data?.productName,
      image: data?.images[0],
      price: data?.price,
      ratings: data?.ratings,
    };
    console.log(wishlistItem);
    await addToWishlist(wishlistItem);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/shop",
        wishlistItem
      );
      console.log(res);
      if (res.data.acknowledged) {
        toast.success("Added wishlist!");
      } else {
        toast.error("wishlist added failed!");
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          `Error: ${error.response.data.message || "Something went wrong!"}`
        );
      } else if (error.request) {
        toast.error("No response from the server. Please try again later.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const handleAddToCart = async () => {
    if (!selectedColor) {
      toast.error("Please select a color!");
      return;
    }
    if (!selectedSize) {
      toast.error("Please select a size!");
      return;
    }

    const addToCartItem = {
      email: session.user.email,
      productId: data?._id,
      productName: data?.productName,
      image: data?.images[0],
      price: data?.price,
      color: selectedColor,
      size: selectedSize,
      quantity: selectedQuantity,
    };
    console.log("addToCartItem", addToCartItem);
    await addToCart(addToCartItem);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/addToCart",
        addToCartItem
      );
      console.log(res);
      if (res.data.acknowledged) {
        toast.success("Added Cart!");
      }
    } catch (error) {
      toast.error("Something wrong!");
    }
  };

  return (
    <div className="w-11/12 lg:w-[1000px] mx-auto my-10">
      <div className="flex flex-col lg:flex-row gap-8 p-6 bg-white ">
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={data?.images[0]}
            className="w-full max-w-[450px] lg:h-[450px] object-cover"
            alt={data?.productName}
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h3 className="text-3xl font-semibold text-gray-800">
            {data?.productName}
          </h3>
          <h4 className="text-2xl font-bold text-[#92614c]">
            ${data?.price}.00
          </h4>
          <h4 className="flex items-center gap-2 text-gray-600">
            <CiStar className="text-orange-500 text-xl" /> 4.9 ({data?.ratings})
          </h4>
          <div className="flex items-center gap-2 text-sm text-green-100">
            <p className="text-black">Status:</p>
            <p className="bg-green-400 py-1 px-3 rounded-full">
              {data?.quantity} Stock
            </p>
          </div>
          {/* Color Options */}
          <div>
            <p className="font-medium text-sm">Color:</p>
            <div className="flex gap-2">
              {data?.colors?.map((color, idx) => (
                <div
                  onClick={() => setSelectedColor(color)}
                  key={idx}
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer hover:scale-105`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div>
            <p className="font-medium text-sm">Size:</p>
            <div className="flex gap-2">
              {data?.sizes?.map((size, idx) => (
                <button
                  onClick={() => setSelectedSize(size)}
                  key={idx}
                  className={`border py-1 px-3 text-gray-700 hover:bg-gray-200 transition ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <p className="font-medium text-sm">Quantity:</p>
            <div className="flex items-center border w-24 justify-between px-5 py-1 ">
              <button
                onClick={() =>
                  setSelectedQuantity((prev) => Math.max(1, prev - 1))
                }
                className="text-lg"
              >
                -
              </button>
              <span>{selectedQuantity}</span>
              <button
                onClick={() => setSelectedQuantity((prev) => prev + 1)}
                className="text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-4">
            <Button
              onClick={handleAddToCart}
              className="flex items-center gap-2 rounded-none  text-white px-6 py-2 "
            >
              <MdOutlineShoppingCart className="text-xl" /> Add To Cart
            </Button>
            <Button
              onClick={handleWishList}
              className="flex items-center gap-2 text-gray-700 bg-gray-100 border px-6 py-2 rounded-none hover:bg-gray-200"
            >
              <FaRegHeart className="text-xl" /> Wishlist
            </Button>
          </div>
        </div>
      </div>
      <button className="border py-2 px-5 mt-8">Description</button>
      <div className="border p-5">
        <p className="text-gray-700 text-sm">{data?.description}</p>
      </div>
    </div>
  );
};

export default Page;
