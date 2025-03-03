import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const productCollection = dbConnect(collectionNamesObj.productCollection);
  const result = await productCollection.find().toArray();
  return NextResponse.json(result);
};

export const POST = async (req) => {
  const body = await req.json();

  const productCollection = dbConnect(collectionNamesObj.productCollection);
  const result = await productCollection.insertOne(body);

  // console.log(body);
  return NextResponse.json(result);
};
