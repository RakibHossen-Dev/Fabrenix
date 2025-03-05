// import { BsCloudUpload } from "react-icons/bs";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import axios from "axios";
// import toast from "react-hot-toast";

// const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
// const ProductUpdateForm = ({ data }) => {
//   console.log("product", data);

//   const handleSubmit = async (e) => {};
//   return (
//     <div className="p-8 max-w-xl">
//       <form className="space-y-4">
//         {/* Image Upload */}
//         {/* <div className="flex flex-col space-y-2">
//         <label className="text-sm font-medium text-gray-700">
//           Product Images (Max 5)
//         </label>
//         <div
//           onClick={() => document.getElementById("productImage").click()}
//           className="w-[250px] h-[180px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-gray-50 transition"
//         >
//           <BsCloudUpload className="text-4xl text-gray-400" />
//           <p className="text-sm text-gray-600">
//             Click to upload or drag & drop
//           </p>
//           <input
//             type="file"
//             id="productImage"
//             multiple
//             accept="image/*"
//             className="hidden"
//             onChange={handleImageChange}
//           />
//         </div>
//       </div> */}

//         {/* Image Preview */}
//         <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2">
//           {data?.images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt="Uploaded Preview"
//               className="w-full md:h-[80px] object-cover rounded-lg"
//             />
//           ))}
//         </div>

//         {/* Product Name */}
//         <div className="grid grid-cols-1 gap-2">
//           <Label className="text-sm font-medium text-gray-700">
//             Product Name
//           </Label>
//           <Input
//             type="text"
//             name="productName"
//             defaultValue={data.productName}
//             placeholder="Type product name"
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="grid grid-cols-1 gap-2">
//             <Label className="text-sm font-medium text-gray-700">
//               Product Quantity
//             </Label>
//             <Input
//               type="number"
//               name="quantity"
//               defaultValue={data.quantity}
//               placeholder="Type product quantity"
//             />
//           </div>
//           <div className="grid grid-cols-1 gap-2">
//             <Label className="text-sm font-medium text-gray-700">
//               Delivery Time
//             </Label>
//             <Input
//               type="text"
//               name="delivery_Time"
//               defaultValue={data.delivery_Time}
//               placeholder="Type Delivery Time"
//             />
//           </div>
//         </div>

//         {/* Product Description */}
//         <div className="grid grid-cols-1 gap-2">
//           <Label className="text-sm font-medium text-gray-700">
//             Product Description
//           </Label>
//           <Textarea
//             name="description"
//             defaultValue={data.description}
//             placeholder="Type product description"
//           />
//         </div>

//         {/* Category & Price */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="grid grid-cols-1 gap-2">
//             <Label className="text-sm font-medium text-gray-700">
//               Product Category
//             </Label>
//             <Select defaultValue={data.category}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a category" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectItem value="Man">Man</SelectItem>
//                   <SelectItem value="Woman">Woman</SelectItem>
//                   <SelectItem value="Kids">Kids</SelectItem>
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="grid grid-cols-1 gap-2">
//             <Label className="text-sm font-medium text-gray-700">
//               Product Price
//             </Label>
//             <Input
//               type="number"
//               name="price"
//               // value={formData.price}
//               defaultValue={data.price}
//               placeholder="Type product price"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="grid grid-cols-1 gap-2">
//             <Label className="text-sm font-medium text-gray-700">
//               Sub Category
//             </Label>
//             <Select defaultValue={data.subCategory}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a sub category" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectItem value="Topwear">Topwear</SelectItem>
//                   <SelectItem value="Bottomwear">Bottomwear</SelectItem>
//                   <SelectItem value="Winterwear">Winterwear</SelectItem>
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//           </div>
//           {/* Colors */}
//           <div className="grid grid-cols-1 gap-2">
//             <Label className="text-sm font-medium text-gray-700">
//               Product Colors (Comma separated)
//             </Label>
//             <Input
//               type="text"
//               name="colors"
//               defaultValue={data.colors.join(", ")}
//               placeholder="e.g. Red, Blue, Green"
//             />
//           </div>
//         </div>
//         {/* Size Selection */}
//         <div>
//           <Label className="text-sm font-medium text-gray-700 mb-4">
//             Product Size
//           </Label>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             {["S", "M", "L", "XL", "XXL"].map((size) => (
//               <div key={size} className="flex items-center space-x-2">
//                 <Checkbox defaultChecked={data?.sizes?.includes(size)} />
//                 <Label className="text-sm font-semibold text-gray-700">
//                   {size}
//                 </Label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <Button type="submit">Update Product</Button>
//       </form>
//     </div>
//   );
// };

// export default ProductUpdateForm;

"use client";
import { useForm } from "react-hook-form";
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
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ProductUpdateForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: data?.productName || "",
      quantity: data?.quantity || "",
      delivery_Time: data?.delivery_Time || "",
      description: data?.description || "",
      category: data?.category || "",
      subCategory: data?.subCategory || "",
      price: data?.price || "",
      colors: data?.colors?.join(", ") || "",
      sizes: data?.sizes || [],
      images: data?.images || [],
    },
  });
  const selectedSizes = watch("sizes");
  const selectedImages = watch("images") || [];
  const router = useRouter();
  const handleImageChange = async (e) => {
    const files = e.target.files;
    if (!files.length) return;
    if (files.length + selectedImages.length > 5) {
      toast.error("You can upload a maximum of 5 images.");
      return;
    }

    const imageUrls = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await axios.post(image_hosting_api, formData);
        if (response.data.success) {
          imageUrls.push(response.data.data.url);
        }
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    }
    setValue("images", [...selectedImages, ...imageUrls]);
  };

  useEffect(() => {
    if (data?.category) setValue("category", data.category);
    if (data?.subCategory) setValue("subCategory", data.subCategory);
  }, [data, setValue]);
  const onSubmit = async (formData) => {
    console.log("Submitted Data:", formData);
    try {
      const res = await axios.patch(
        `http://localhost:3000/api/manageProduct/${data._id}`,
        formData
      );
      console.log(res);
      if (res.data.modifiedCount > 0) {
        toast.success("Product Updated Successfully!");
        router.refresh();
        router.push("/dashboard/manageProduct");
      } else {
        toast.error("Failed to update product.");
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="p-8 max-w-xl">
      <h3 className="my-3 text-3xl font-semibold text-black">Product update</h3>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
          {selectedImages.map((img, index) => (
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
          <Label>Product Name</Label>
          <Input {...register("productName", { required: true })} />
          {errors.productName && (
            <p className="text-red-500 text-sm">Product Name is required</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Product Quantity</Label>
            <Input
              type="number"
              {...register("quantity", { required: true })}
            />
          </div>
          <div>
            <Label>Delivery Time</Label>
            <Input
              type="text"
              {...register("delivery_Time", { required: true })}
            />
          </div>
        </div>

        {/* Product Description */}
        <div>
          <Label>Product Description</Label>
          <Textarea {...register("description")} />
        </div>

        {/* Category & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <div>
            <Label>Product Category</Label>
            <Select {...register("category")}>
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
          </div> */}
          <div>
            <label>Product Category</label>
            <Select
              onValueChange={(value) => setValue("category", value)}
              value={watch("category")}
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
          <div>
            <Label>Product Price</Label>
            <Input type="number" {...register("price", { required: true })} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Sub Category</label>
            <Select
              onValueChange={(value) => setValue("subCategory", value)}
              value={watch("subCategory")}
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

          <div>
            <Label>Product Colors (Comma separated)</Label>
            <Input type="text" {...register("colors")} />
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <Label>Product Size</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox
                  checked={selectedSizes.includes(size)}
                  onCheckedChange={(checked) => {
                    const updatedSizes = checked
                      ? [...selectedSizes, size]
                      : selectedSizes.filter((s) => s !== size);
                    setValue("sizes", updatedSizes);
                  }}
                />
                <Label>{size}</Label>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit">Update Product</Button>
      </form>
    </div>
  );
};

export default ProductUpdateForm;
