import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const orderCollection = dbConnect(collectionNamesObj.orderCollection);
  const result = await orderCollection.find({ email }).toArray();
  return NextResponse.json(result);
};

export const POST = async (req) => {
  const body = await req.json();

  const orderCollection = dbConnect(collectionNamesObj.orderCollection);
  const result = await orderCollection.insertOne(body);

  return NextResponse.json(result);
};

export const DELETE = async (req) => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
    return res.status(400).send({ error: "User email is required" });
  }

  const cartCollection = dbConnect(collectionNamesObj.cartCollection);
  const result = await cartCollection.deleteMany({ email: email });

  return NextResponse.json(result);
};

// export const PATCH = async (req) => {
//   const session = await getServerSession(authOptions);
//   const email = session?.user?.email;
//   const orderCollection = dbConnect(collectionNamesObj.orderCollection);
//   const filter = { email: email };

//   const updateDoc = {
//     $set: {
//       paymentStatus: "confirmed",
//     },
//   };

//   const option = {
//     upsert: true,
//   };
//   const updateResponse = await orderCollection.updateOne(
//     filter,
//     updateDoc,
//     option
//   );
//   return NextResponse.json(updateResponse);
// };

export const PATCH = async (req) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = session.user.email;

  console.log("Session Email:", email);

  const orderCollection = dbConnect(collectionNamesObj.orderCollection);

  const filter = { email: email };

  const updateDoc = {
    $set: {
      paymentStatus: "confirmed",
    },
  };

  const updateResponse = await orderCollection.updateMany(filter, updateDoc);

  return NextResponse.json(updateResponse);
};
