"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const page = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/wishlist");
        setWishlist(res.data);
      } catch (error) {
        console.error("Error fetching wishlist data:", error);
      }
    };

    fetchData();
  }, []);
  // const wishlist = await axios.get("http://localhost:3000/api/wishlist");
  console.log("wishlist", wishlist);
  return (
    <div>
      <div className="w-11/12 mx-auto my-20">
        <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
          YOUR <span className="font-bold text-gray-800">WIShLIST</span>
          <span className=" w-12 h-[2px] bg-gray-800"></span>
        </h2>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2  md:gap-4 items-center ">
          {wishlist?.map((product) => (
            <Link href={`/shop/${product._id}`} key={product?._id}>
              <div className="border h-[320px] md:h-[340px] p-2 rounded-lg ">
                <div className="relative">
                  <img
                    src={product?.image}
                    className="w-full md:h-[200px] h-[150px]rounded-lg  object-cover"
                    alt={product?.name}
                  ></img>
                  <span className="bg-rose-100 p-2 text-black text-md md:text-lg absolute top-2 right-2 rounded-md">
                    <FaRegHeart />
                  </span>
                </div>
                <h3 className="md:text-lg text-md mt-3 font-semibold">
                  {product?.productName}
                </h3>
                <h4 className="flex items-center gap-2">
                  <CiStar className="text-orange-500" />
                  4.9 ({product?.ratings})
                </h4>
                <p className="md:text-xl text-lg font-bold">
                  ${product?.price}.00
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
