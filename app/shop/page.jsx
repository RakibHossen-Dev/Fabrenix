"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
// import SearchAndSort from "./components/SearchAndSort";
import { useEffect, useState } from "react";
const page = () => {
  //   const products = await axios.get("http://localhost:3000/api/shop");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColor, setSelectedColor] = useState(""); // কালার ফিল্টার
  const [selectedSize, setSelectedSize] = useState(""); // সাইজ ফিল্টার
  const [sortBy, setSortBy] = useState(""); // Sorting Option
  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/shop");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  console.log("products", products);
  if (!products) {
    return <p>Loading...</p>;
  }

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedColor("");
    setSelectedSize("");
    setSortBy("");
    setSearchTerm("");
  };
  const filteredProducts = products
    .filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(product.category)
        : true
    )
    .filter((product) =>
      selectedColor ? product.colors.includes(selectedColor) : true
    )
    .filter((product) =>
      selectedSize ? product.sizes.includes(selectedSize) : true
    )
    .sort((a, b) => {
      if (sortBy === "Low To High") return a.price - b.price;
      if (sortBy === "High To Low") return b.price - a.price;
      if (sortBy === "Ratings") return b.ratings - a.ratings;
      return 0;
    });

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
          ALL <span className="font-bold text-gray-800">COLLECTION</span>
          <span className=" w-12 h-[2px] bg-gray-800"></span>
        </h2>
        <Input
          type="search"
          className="max-w-[400px] rounded-full"
          placeholder="Search anything"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-[160px] rounded-full">
              <SelectValue>Sort by</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Low To High">Price: Low to High</SelectItem>
                <SelectItem value="High To Low">Price: High to Low</SelectItem>
                <SelectItem value="Ratings">Ratings</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <div className="mb-8">
            <h2 className="text-xl  font-bold text-gray-800 gap-2 mb-5">
              CATEGORY
            </h2>
            {["Man", "Woman", "Kids", "Shoes"].map((category) => (
              <label
                key={category}
                className="flex items-center my-3 space-x-2 cursor-pointer"
              >
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                  className="w-5 h-5"
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
            <button
              onClick={clearFilters}
              className="mt-2 px-4 text-sm py-2 border text-black rounded-full"
            >
              Clear Filter
            </button>
          </div>
          <div>
            <h2 className="text-xl  font-bold text-gray-800 gap-2 mb-5">
              SIZE
            </h2>
            <div className="flex flex-wrap gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size, idx) => (
                <button
                  onClick={() => setSelectedSize(size)}
                  key={idx}
                  className={`mr-2 px-3 py-1 border ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-5">COLOR</h2>
            {["Red", "Blue", "Green", "Black", "Pink"].map((color) => (
              <button
                key={color}
                className={`mr-2 w-8 h-8 rounded-full border-2 cursor-pointer hover:scale-105 ${
                  selectedColor === color ? "bg-gray-800 text-white" : ""
                }`}
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
        <div className="col-span-9">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2  md:gap-4 items-center ">
            {filteredProducts?.map((product) => (
              <Link href={`/shop/${product._id}`} key={product?._id}>
                <div className=" h-[320px] md:h-[340px]  ">
                  <div className="relative">
                    <img
                      src={product?.images[0]}
                      className="w-full md:h-[200px] h-[150px]rounded-lg  object-cover"
                      alt={product?.productName}
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
    </div>
  );
};

export default page;
