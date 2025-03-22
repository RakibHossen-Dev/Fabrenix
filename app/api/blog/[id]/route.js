import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;
  const blogCollection = dbConnect(collectionNamesObj.blogCollection);
  const query = { _id: new ObjectId(p.id) };

  const singleProduct = await blogCollection.findOne(query);
  return NextResponse.json(singleProduct);
};
