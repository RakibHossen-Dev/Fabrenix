import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const p = await params;
  const cartCollection = dbConnect(collectionNamesObj.cartCollection);
  const query = { _id: new ObjectId(p.id) };
  const deleteResponse = await cartCollection.deleteOne(query);
  return NextResponse.json(deleteResponse);
};

export const PATCH = async (req, { params }) => {
  const p = await params;

  const { quantity } = await req.json();
  const cartCollection = dbConnect(collectionNamesObj.cartCollection);

  const cartItem = await cartCollection.findOne({
    _id: new ObjectId(p.id),
  });

  if (!cartItem) {
    return NextResponse.json(
      { message: "Cart item not found!" },
      { status: 404 }
    );
  }

  const unitPrice = cartItem.price / cartItem.quantity;

  const updatedPrice = unitPrice * quantity;

  const updateResponse = await cartCollection.updateOne(
    { _id: new ObjectId(p.id) },
    { $set: { quantity, price: updatedPrice } }
  );

  return NextResponse.json(updateResponse);
};
