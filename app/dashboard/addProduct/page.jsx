"use client";
import { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import toast from "react-hot-toast";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Page = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "",
    subCategory: "",
    price: "",
    quantity: "",
    ratings: 0,
    delivery_Time: "",
    colors: [],
    sizes: [],
    images: [],
  });

  const [previewImages, setPreviewImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (e) => {
    const colorArray = e.target.value.split(",").map((color) => color.trim());
    setFormData((prev) => ({ ...prev, colors: colorArray }));
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + previewImages.length > 5) {
      alert("You can only upload up to 5 images");
      return;
    }

    const uploadedImages = files.map((file) => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...uploadedImages]);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleSizeChange = (size) => {
    setFormData((prev) => {
      const newSizes = prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes: newSizes };
    });
  };

  const uploadImages = async (files) => {
    const uploadedUrls = [];
    for (const file of files) {
      const imageData = new FormData();
      imageData.append("image", file);
      try {
        const response = await fetch(image_hosting_api, {
          method: "POST",
          body: imageData,
        });
        const data = await response.json();
        uploadedUrls.push(data.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrls = await uploadImages(formData.images);
      const finalData = { ...formData, images: imageUrls };
      console.log("Final Submitted Data:", finalData);
      const res = await axios.post(
        "http://localhost:3000el.app/api/addProduct",
        finalData
      );
      console.log(res);
      if (res.data.acknowledged) {
        toast.success("Product added successfully!");
      } else {
        toast.error("Product added failed!");
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

  return (
    <div className="p-8 max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Product Images (Max 5)
          </label>
          <div
            onClick={() => document.getElementById("productImage").click()}
            className="w-[250px] h-[180px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-gray-50 transition"
          >
            <BsCloudUpload className="text-4xl text-gray-400" />
            <p className="text-sm text-gray-600">
              Click to upload or drag & drop
            </p>
            <input
              type="file"
              id="productImage"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* Image Preview */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2">
          {previewImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Uploaded Preview"
              className="w-full md:h-[80px] object-cover rounded-lg"
            />
          ))}
        </div>

        {/* Product Name */}
        <div className="grid grid-cols-1 gap-2">
          <Label className="text-sm font-medium text-gray-700">
            Product Name
          </Label>
          <Input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Type product name"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <Label className="text-sm font-medium text-gray-700">
              Product Quantity
            </Label>
            <Input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Type product quantity"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label className="text-sm font-medium text-gray-700">
              Delivery Time
            </Label>
            <Input
              type="text"
              name="delivery_Time"
              value={formData.delivery_Time}
              onChange={handleChange}
              placeholder="Type Delivery Time"
            />
          </div>
        </div>

        {/* Product Description */}
        <div className="grid grid-cols-1 gap-2">
          <Label className="text-sm font-medium text-gray-700">
            Product Description
          </Label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Type product description"
          />
        </div>

        {/* Category & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <Label className="text-sm font-medium text-gray-700">
              Product Category
            </Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Man">Man</SelectItem>
                  <SelectItem value="Woman">Woman</SelectItem>
                  <SelectItem value="Kids">Kids</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <Label className="text-sm font-medium text-gray-700">
              Product Price
            </Label>
            <Input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Type product price"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <Label className="text-sm font-medium text-gray-700">
              Sub Category
            </Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, subCategory: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a sub category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Topwear">Topwear</SelectItem>
                  <SelectItem value="Bottomwear">Bottomwear</SelectItem>
                  <SelectItem value="Winterwear">Winterwear</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Colors */}
          <div className="grid grid-cols-1 gap-2">
            <Label className="text-sm font-medium text-gray-700">
              Product Colors (Comma separated)
            </Label>
            <Input
              type="text"
              name="colors"
              value={formData.colors.join(", ")}
              onChange={handleColorChange}
              placeholder="e.g. Red, Blue, Green"
            />
          </div>
        </div>
        {/* Size Selection */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-4">
            Product Size
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox onCheckedChange={() => handleSizeChange(size)} />
                <Label className="text-sm font-semibold text-gray-700">
                  {size}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit">Add Product</Button>
      </form>
    </div>
  );
};

export default Page;
