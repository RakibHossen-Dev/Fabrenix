"use client";

import axios from "axios";
import { PackageSearch } from "lucide-react";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
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
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const Page = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/stats");
        setStats(res.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  const data = [
    { name: "Users", value: stats.totalUsers },
    { name: "Orders", value: stats.totalOrders },
    { name: "Revenue", value: stats.totalRevenue },
  ];

  const { data: recentOrders = [], refetch } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/order");
      return res.data;
    },
  });

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Orders */}
        <div className="bg-white border shadow-md rounded-xl p-6 flex gap-2">
          <div className="flex flex-col justify-center text-center items-center gap-3">
            <div className="bg-gray-100 p-3 rounded-lg">
              <PackageSearch />
            </div>
            <h3 className="text-gray-500 text-sm">Orders</h3>
            <h2 className="text-3xl font-bold">{stats.totalOrders}</h2>
          </div>
        </div>

        {/* Customers */}
        <div className="bg-white border shadow-md rounded-xl p-6 flex gap-2">
          <div className="flex flex-col justify-center text-center items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <LuUsersRound />
            </div>
            <h3 className="text-gray-500 text-sm">Customers</h3>
            <h2 className="text-3xl font-bold">{stats.totalUsers}</h2>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white border shadow-md rounded-xl p-6 flex gap-2">
          <div className="flex flex-col justify-center text-center items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">
              <BsCurrencyDollar />
            </div>
            <h3 className="text-gray-500 text-sm">Revenue</h3>
            <h2 className="text-3xl font-bold">${stats.totalRevenue}</h2>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        <div className="bg-white border rounded-lg p-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between gap-5 items-center mb-5">
            <h4 className="text-xl font-semibold">Recent Orders</h4>
            <Link href="/dashboard/order">
              <Button>See All</Button>
            </Link>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Product</TableHead>
                <TableHead>rderDate</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.slice(0, 3).map((recentOrder) => (
                <TableRow key={recentOrder._id}>
                  <TableCell className="font-medium">
                    <img
                      src={recentOrder.cartData[0].image}
                      className="w-12 h-12 rounded-lg"
                    />
                  </TableCell>
                  <TableCell>{recentOrder.orderDate}</TableCell>
                  <TableCell>{recentOrder.totalPrice}</TableCell>
                  <TableCell className="text-right">
                    <button
                      className={`py-1 px-2.5 rounded-full text-white 
    ${
      recentOrder.status === "pending"
        ? "bg-red-500"
        : recentOrder.status === "Delivered"
        ? "bg-green-500"
        : recentOrder.status === "processing"
        ? "bg-yellow-500"
        : "bg-gray-400"
    }`}
                    >
                      {recentOrder.status}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Page;
