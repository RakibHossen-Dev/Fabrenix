import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  console.log(session?.user?.email);
  if (session) {
    const email = session?.user?.email;
    const cartCollection = dbConnect(collectionNamesObj.cartCollection);
    const result = await cartCollection.find({ email }).toArray();
    return NextResponse.json(result);
  }
};

export const POST = async (req) => {
  const body = await req.json();
  const { email, productId, productName, image, price, color, size, quantity } =
    body;

  if (!email || !productId) {
    return NextResponse.json(
      { error: "Email and productId are required" },
      { status: 400 }
    );
  }

  const cartCollection = dbConnect(collectionNamesObj.cartCollection);
  const existingItem = await cartCollection.findOne({ email, productId });

  if (existingItem) {
    // const newQuantity = existingItem.quantity + quantity;
    // const newPrice = newQuantity * price;
    // const newPrice = existingItem.price + quantity * price;
    const pricePerUnit = existingItem.price / existingItem.quantity; // 🔹 প্রতি ইউনিটের দাম বের করা
    const newQuantity = existingItem.quantity + quantity;
    const newPrice = newQuantity * pricePerUnit;
    await cartCollection.updateOne(
      { email, productId },
      // { $set: { quantity: existingItem.quantity + quantity } }
      { $set: { quantity: newQuantity, price: newPrice } }
    );
    return NextResponse.json({ message: "Quantity updated!" });
  } else {
    await cartCollection.insertOne({
      email,
      productId,
      productName,
      image,
      price,
      color,
      size,
      quantity,
    });
    return NextResponse.json({ message: "Added to cart!" });
  }
};
