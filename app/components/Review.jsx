"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  const reviews = [
    {
      id: 1,
      title: "Great Selection and Quality",
      review:
        "I love the variety of styles and the high-quality clothing on this web fashion site.",
      name: "Allen Lyn",
      location: "Customer from France",
      product: {
        name: "Cotton jersey top",
        price: "$7.95",
        image: "/images/Categories/category4.jpg",
      },
    },
    {
      id: 2,
      title: "Best Customer Service",
      review:
        "I finally found a web fashion site with stylish and flattering options in my size.",
      name: "Peter Rope",
      location: "Customer from USA",
      product: {
        name: "Ribbed modal T-shirt",
        price: "From $18.95",
        image: "/images/Categories/category2.jpg",
      },
    },
    {
      id: 3,
      title: "Great Selection and Quality",
      review:
        "I love the variety of styles and the high-quality clothing on this web fashion site.",
      name: "Hellen Ase",
      location: "Customer from Japan",
      product: {
        name: "Tank Top",
        price: "$16.95",
        image: "/images/Categories/category1.jpg",
      },
    },
    {
      id: 4,
      title: "Amazing Styles",
      review:
        "A fantastic selection of trendy clothes that always get me compliments.",
      name: "Sofia Lane",
      location: "Customer from Canada",
      product: {
        name: "Floral Dress",
        price: "$29.99",
        image: "/images/Categories/category4.jpg",
      },
    },
    {
      id: 5,
      title: "Perfect Fit!",
      review:
        "Finally, a store that provides stylish clothes in my size. Highly recommended!",
      name: "Michael Scott",
      location: "Customer from UK",
      product: {
        name: "Slim Fit Jeans",
        price: "$49.99",
        image: "/images/Categories/category5.jpg",
      },
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // **Next Button**
  const nextReview = () => {
    setIndex((prev) =>
      prev + cardsPerView >= reviews.length ? 0 : prev + cardsPerView
    );
  };

  // **Previous Button**
  const prevReview = () => {
    setIndex((prev) =>
      prev - cardsPerView < 0
        ? reviews.length - cardsPerView
        : prev - cardsPerView
    );
  };

  return (
    <div className="w-11/12 mx-auto mt-10 mb-20">
      <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
        HAPPY <span className="font-bold text-gray-800">CLIENTS</span>
        <span className=" w-12 h-[2px] bg-gray-800"></span>
      </h2>

      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={prevReview}
          className="absolute md:-left-8 -left-3  top-1/2 transform -translate-y-1/2 py-2 px-3 border rounded-full hover:bg-gray-300"
        >
          ←
        </button>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 ">
          {reviews.slice(index, index + cardsPerView).map((review) => (
            <div key={review.id} className="border shadow-sm rounded-lg p-6">
              <h3 className="text-xl font-bold">{review.title}</h3>
              <p className="text-gray-600 mt-2">{review.review}</p>

              <div className="mt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-gray-500">{review.location}</p>
              </div>

              <hr className="my-4" />

              {/* Product Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={review.product.image}
                  alt={review.product.name}
                  width={50}
                  height={50}
                  className="rounded-lg w-[50px] h-[50px]"
                />
                <div>
                  <p className="text-sm text-gray-700">{review.product.name}</p>
                  <p className="text-lg font-semibold">
                    {review.product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextReview}
          className="absolute md:-right-8 -right-3  top-1/2 transform -translate-y-1/2 py-2 px-3 border rounded-full hover:bg-gray-300"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Review;
