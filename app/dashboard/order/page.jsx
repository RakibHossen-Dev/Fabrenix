"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const page = () => {
  // const [data, setData] = useState([]);
  const [status, setStatus] = useState(null);
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openDialogId, setOpenDialogId] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/order");
  //       setData(res.data);
  //     } catch (error) {
  //       console.error("Error fetching order data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const { data: data = [], refetch } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/order");
      return res.data;
    },
  });
  const handleSave = async (id) => {
    console.log("Selected Status:", status);
    console.log("Selected id:", id);
    // setIsDialogOpen(false);

    try {
      await axios.patch(`http://localhost:3000/api/order/${id}`, {
        status: status,
      });
      refetch();
      await toast.success("Status updated");
      setOpenDialogId(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-11/12 mx-auto my-8">
      <h2 className="text-2xl  text-gray-600 flex items-center gap-2 mb-5">
        Orders
      </h2>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((order) => (
              <TableRow key={order._id}>
                <TableCell className="font-medium">{order.firstName}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>5</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{order.status}</span>
                    {/* <FaEdit></FaEdit> */}
                    <Dialog
                      open={openDialogId === order._id}
                      onOpenChange={() => setOpenDialogId(order._id)}
                    >
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <FaEdit></FaEdit>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[390px] rounded-sm">
                        <DialogHeader>
                          <DialogTitle>Update Status</DialogTitle>
                          <DialogDescription>
                            Update your order status
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Select
                            defaultValue={order.status}
                            onValueChange={setStatus}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="processing">
                                  Processing
                                </SelectItem>
                                <SelectItem value="Delivered ">
                                  Delivered
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <DialogFooter>
                          <Button
                            type="button"
                            onClick={() => handleSave(order._id)}
                          >
                            Save changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${order.totalPrice}
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
