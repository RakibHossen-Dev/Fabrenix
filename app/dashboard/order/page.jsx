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
import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/order");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchData();
  }, []);

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
                    <FaEdit></FaEdit>
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
