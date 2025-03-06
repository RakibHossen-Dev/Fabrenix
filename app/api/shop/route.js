import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const productCollection = dbConnect(collectionNamesObj.productCollection);
  const result = await productCollection.find().toArray();
  return NextResponse.json(result);
};