"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { LuPackageSearch } from "react-icons/lu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";
import ProductUpdateForm from "./components/ProductUpdateForm"
const page = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/addProduct");
      return res.data;
    },
  });

  console.log(products);
  const handleDeleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/manageProduct/${id}`
      );
      refetch();
      console.log(res);

      if (res.data.deletedCount > 0) {
        toast.success("Deleted successfully!");
      } else {
        toast.error("Deleted failed!");
      }
    } catch (error) {
      toast.error("Server error!");
    }
  };
  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-semibold text-black">Manage products</h3>
          <div className="flex gap-2  items-center  text-gray-700">
            <LuPackageSearch className="text-black" />
            {products.length} Products
          </div>
        </div>
        <Link href="/dashboard/addProduct">
          <Button className="flex gap-2 justify-center items-center rounded-sm">
            <FaPlus></FaPlus>
            <span>Add new product</span>
          </Button>
        </Link>
      </div>
      <div className="bg-gray-50 mt-8 border overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Picture</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="">Price</TableHead>
              <TableHead className="">Edit</TableHead>
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product?._id}>
                <TableCell className="font-medium">
                  <img
                    src={product?.images[0]}
                    alt={product?.productName}
                  ></img>
                </TableCell>
                <TableCell>{product?.productName}</TableCell>
                <TableCell>{product?.quantity}</TableCell>
                <TableCell className="">${product?.price}</TableCell>
                <TableCell className="">
                  {/* <FaEdit className="text-xl text-gray-800"></FaEdit> */}
                  <ProductUpdateForm></ProductUpdateForm>
                </TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      {/* <button onClick={() => handleDeleteProduct(product._id)}> */}
                      {/* </button> */}
                      <FaTrash
                        // onClick={() => handleDeleteProduct(product._id)}
                        className="text-xl text-gray-800"
                      ></FaTrash>
                    </AlertDialogTrigger>
                    {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteProduct(product._id)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
