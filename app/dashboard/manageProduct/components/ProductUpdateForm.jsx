import { FaEdit, } from "react-icons/fa";
import { BsCloudUpload } from "react-icons/bs";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useState } from "react";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const ProductUpdateForm = () => {

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
    const handleUpdateProduct =()=>{
        console.log("Update Product");
    }

    const handleSubmit = async (e) => {}
    return (
        <div>
            <Dialog>
      <DialogTrigger asChild>
            <FaEdit className="text-xl text-gray-800 cursor-pointer"></FaEdit>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] w-full max-w-[90%] mx-auto h-[85%] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit product</DialogTitle>
         
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
             Images (Max 5)
          </label>
          <div
            onClick={() => document.getElementById("productImage").click()}
            className="w-[140px] h-[100px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-gray-50 transition"
          >
            <BsCloudUpload className="text-4xl text-gray-400" />
            <p className="text-sm text-gray-600">
              Click to upload 
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
             Name
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
               Quantity
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
            Description
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
              Category
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
               Price
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
Colors (Comma separated)
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
             Size
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

        {/* <Button type="submit">Add Product</Button> */}
      </form>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </div>
    );
};

export default ProductUpdateForm;