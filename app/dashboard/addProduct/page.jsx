// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button";

// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"
// const page = () => {
//     return (
//         <div className="p-5">
//             {/* <h3>Add Product</h3> */}
//             <form className="max-w-[700px]"> 
//                 <div className="grid w-full max-w-sm items-center gap-1.5">
//                 <Label htmlFor="email">Product Name</Label>
//                 <Input type="text" id="product" placeholder="Type product name" />
//               </div>
//                 <div className="grid w-full max-w-sm items-center gap-1.5">
//                 <Label htmlFor="email">Product Description</Label>
//                 <Textarea placeholder="Type your message here." />
//               </div>
//               <div className="flex justify-between items-center gap-5">
//                 <div className="grid w-full max-w-sm items-center gap-1.5">
//                 <Label htmlFor="email">Product category</Label>
//                 <Select>
//                  <SelectTrigger className="w-[180px]">
//                    <SelectValue placeholder="Select a category" />
//                  </SelectTrigger>
//                   <SelectContent>
//                      <SelectGroup>
//                   <SelectItem value="Man">Man</SelectItem>
//                   <SelectItem value="Woman">Woman</SelectItem>
//                   <SelectItem value="Kids">Kids</SelectItem>
//                  </SelectGroup>
//                 </SelectContent>
//                    </Select>
//               </div>
//               <div className="grid w-full max-w-sm items-center gap-1.5">
//                 <Label htmlFor="email">Product Price</Label>
//                 <Input type="number" id="price" placeholder="Type product price" />

//               </div>
//               </div>
//               <div className="flex justify-between items-center gap-5">
//                 <div className="grid w-full max-w-sm items-center gap-1.5">
//                 <Label htmlFor="email">Sub category</Label>
//                 <Select>
//                  <SelectTrigger className="w-[180px]">
//                    <SelectValue placeholder="Select a Sub category" />
//                  </SelectTrigger>
//                   <SelectContent>
//                      <SelectGroup>
//                   <SelectItem value="Man">Topwear</SelectItem>
//                   <SelectItem value="Woman">Bottomwear</SelectItem>
//                   <SelectItem value="Kids">Winterwear</SelectItem>
//                  </SelectGroup>
//                 </SelectContent>
//                    </Select>
//               </div>
//               <div className="grid w-full max-w-sm items-center gap-1.5">
//                 <Label htmlFor="email">Product Colors (comma-separated)</Label>
//                 <Input type="number" id="Colors" placeholder="Type product Colors" />

//               </div>
//               </div>

//               <div className="flex  items-center gap-4">
//               <div className="flex items-center space-x-2">
//       <Checkbox id="terms" />
//       <label
//         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//       >
//         S
//       </label>
//     </div>
//               <div className="flex items-center space-x-2">
//       <Checkbox id="terms" />
//       <label
//         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//       >
//         M
//       </label>
//     </div>
//               <div className="flex items-center space-x-2">
//       <Checkbox id="terms" />
//       <label
//         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//       >
//         L
//       </label>
//     </div>
//               <div className="flex items-center space-x-2">
//       <Checkbox id="terms" />
//       <label
//         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//       >
//         XL
//       </label>
//     </div>
//               <div className="flex items-center space-x-2">
//       <Checkbox id="terms" />
//       <label
//         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//       >
//         XXL
//       </label>
//     </div>
//               </div>

// <Button>Add Product</Button>
//             </form>
//         </div>
//     );
// };

// export default page;


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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <div className="p-8 max-w-xl ">
      <form className="space-y-4">
        {/* Product Name */}
        <div className="grid grid-cols-1 gap-2">
          <Label htmlFor="product" className="text-sm font-medium text-gray-700">
            Product Name
          </Label>
          <Input
            type="text"
            id="product"
            placeholder="Type product name"
            className="border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-sm"
          />
        </div>

        {/* Product Description */}
        <div className="grid grid-cols-1 gap-2">
          <Label htmlFor="description" className="text-sm font-medium text-gray-700">
            Product Description
          </Label>
          <Textarea
            id="description"
            placeholder="Type product description here."
            className="border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-sm"
          />
        </div>

        {/* Product Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="category" className="text-sm font-medium text-gray-700">
              Product Category
            </Label>
            <Select id="category" className="rounded-sm">
              <SelectTrigger className="w-full border-gray-300 focus:ring-2 focus:ring-indigo-500">
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

          {/* Product Price */}
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="price" className="text-sm font-medium text-gray-700">
              Product Price
            </Label>
            <Input
              type="number"
              id="price"
              placeholder="Type product price"
              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-sm"
            />
          </div>
        </div>

        {/* Sub Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="subCategory" className="text-sm font-medium text-gray-700">
              Sub Category
            </Label>
            <Select id="subCategory" className="rounded-sm">
              <SelectTrigger className="w-full border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-sm">
                <SelectValue placeholder="Select a Sub category" />
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

          {/* Product Colors */}
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="colors" className="text-sm font-medium text-gray-700">
              Product Colors (comma-separated)
            </Label>
            <Input
              type="text"
              id="colors"
              placeholder="Type product colors"
              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-sm"
            />
          </div>
        </div>

        {/* Size Selection */}
        <div className="">
        <Label htmlFor="subCategory" className="text-sm font-medium text-gray-700 mb-4">
              Product Size
            </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox id={`size-${size}`} />
              <Label htmlFor={`size-${size}`} className="text-sm font-semibold text-gray-700">
                {size}
              </Label>
            </div>
          ))}
        </div>
        </div>

        {/* Submit Button */}
        <Button className="rounded-none">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default page;
