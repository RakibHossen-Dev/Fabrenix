import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  const p = await params;
  const orderCollection = dbConnect(collectionNamesObj.orderCollection);
  const query = { _id: new ObjectId(p.id) };
  const { status } = await req.json();
  const filter = {
    $set: {
      status: status,
    },
  };

  const option = {
    upsert: true,
  };
  const updateResponse = await orderCollection.updateOne(query, filter, option);
  return NextResponse.json(updateResponse);
};
