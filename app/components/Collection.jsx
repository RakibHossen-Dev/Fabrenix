"use client";

import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

import { CiStar } from "react-icons/ci";
import { useSession } from "next-auth/react";
import { useWishlist } from "../context/WishlistContext";

const Collection = ({ product }) => {
  const { data: session, status } = useSession();
  const { addToWishlist } = useWishlist();

  const handleWishlist = async (data) => {
    const wishlistItem = {
      email: session.user.email,
      productId: data?._id,
      productName: data?.productName,
      image: data?.images[0],
      price: data?.price,
      ratings: data?.ratings,
    };
    // console.log(wishlistItem);
    await addToWishlist(wishlistItem);
  };
  return (
    <>
      {/* {res?.data?.map((product) => ( */}
      <div className="border h-[320px] md:h-[340px] p-2 rounded-lg  relative">
        <button
          onClick={() => handleWishlist(product)}
          className="bg-rose-100 p-2 text-black text-md md:text-lg absolute top-4 right-4 rounded-md"
        >
          <FaRegHeart />
        </button>
        <Link href={`/shop/${product._id}`}>
          <img
            src={product?.images[0]}
            className="w-full md:h-[200px] h-[150px]rounded-lg  object-cover"
            alt={product?.productName}
          ></img>

          <h3 className="md:text-lg text-md mt-3 font-semibold">
            {product?.productName}
          </h3>
          <h4 className="flex items-center gap-2">
            <CiStar className="text-orange-500" />
            4.9 ({product?.ratings})
          </h4>
          <p className="md:text-xl text-lg font-bold">${product?.price}.00</p>
        </Link>
      </div>
    </>
  );
};

export default Collection;
