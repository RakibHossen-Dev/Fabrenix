import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const orderCollection = dbConnect(collectionNamesObj.orderCollection);
  const userCollection = dbConnect(collectionNamesObj.userCollection);
  const totalUsers = await userCollection.estimatedDocumentCount();
  const totalOrders = await orderCollection.estimatedDocumentCount();

  const totalRevenueResult = await orderCollection
    .aggregate([
      { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } },
    ])
    .toArray();

  const totalRevenue =
    totalRevenueResult.length > 0 ? totalRevenueResult[0].totalRevenue : 0;

  return NextResponse.json({ totalUsers, totalOrders, totalRevenue });
};
