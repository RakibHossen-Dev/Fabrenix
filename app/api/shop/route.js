import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const productCollection = dbConnect(collectionNamesObj.productCollection);
  const result = await productCollection.find().toArray();
  return NextResponse.json(result);
};



export const POST = async (req) => {
  const body = await req.json();

  const wishlistCollection = dbConnect(collectionNamesObj.wishlistCollection);

  const { email, productId, productName, image, price, ratings } = body;

  if (!email || !productId) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const existingItem = await wishlistCollection.findOne({ email, productId });
  if (existingItem) {
    return NextResponse.json(
      { message: "Item already in wishlist" },
      { status: 400 }
    );
  }

  const result = await wishlistCollection.insertOne({
    email,
    productId,
    productName,
    image,
    price,
    ratings,
    createdAt: new Date(),
  });

  return NextResponse.json(
    { acknowledged: result.acknowledged, insertedId: result.insertedId },
    { status: 201 }
  );
};
