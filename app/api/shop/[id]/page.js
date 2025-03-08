import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;
  const productCollection = dbConnect(collectionNamesObj.productCollection);
  const query = { _id: new ObjectId(p.id) };

  const singleProduct = await productCollection.findOne(query);
  return NextResponse.json(singleProduct);
};
