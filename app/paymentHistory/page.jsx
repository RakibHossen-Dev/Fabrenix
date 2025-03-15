"use client";
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

const page = () => {
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/payment-history");
      return res.data;
    },
  });
  return (
    <div className="my-10 w-11/12 mx-auto">
      <h2 className="text-2xl font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
        PAYMENT <span className="font-bold text-gray-800">HISTORY</span>
        <span className="w-12 h-[2px] bg-gray-800"></span>
      </h2>
      <div className="border rounded-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Email</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Transaction Id</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment._id}>
                <TableCell className="font-medium">
                  {payment.userEmail}
                </TableCell>
                <TableCell>{payment.paymentMethid}</TableCell>
                <TableCell>
                  <button className="text-green-100 bg-green-500 py-1 px-3 rounded-full">
                    {payment.status}
                  </button>
                </TableCell>
                <TableCell>{payment.paymentDate}</TableCell>
                <TableCell>{payment.paymentIntentId}</TableCell>
                <TableCell className="text-right">
                  ${payment.amount}.00
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
