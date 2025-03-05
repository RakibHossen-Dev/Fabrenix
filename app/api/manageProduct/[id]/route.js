import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const p = await params;
  const productCollection = dbConnect(collectionNamesObj.productCollection);
  const query = { _id: new ObjectId(p.id) };
  const deleteResponse = await productCollection.deleteOne(query);
  return NextResponse.json(deleteResponse);
};

export const GET = async (req, { params }) => {
  const p = await params;
  const productCollection = dbConnect(collectionNamesObj.productCollection);
  const query = { _id: new ObjectId(p.id) };

  const singleProduct = await productCollection.findOne(query);
  return NextResponse.json(singleProduct);
};

export const PATCH = async (req, { params }) => {
  const p = await params;
  const productCollection = dbConnect(collectionNamesObj.productCollection);
  const query = { _id: new ObjectId(p.id) };
  const body = await req.json();
  const filter = {
    $set: { ...body },
  };

  const option = {
    upsert: true,
  };
  const updateResponse = await productCollection.updateOne(query, filter);
  return NextResponse.json(updateResponse);
};
