import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const blogCollection = dbConnect(collectionNamesObj.blogCollection);
  const result = await blogCollection.find().toArray();
  return NextResponse.json(result);
};
