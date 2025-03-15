import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const paymentHistoryCollection = dbConnect(
    collectionNamesObj.paymentHistoryCollection
  );
  const result = await paymentHistoryCollection
    .find({ userEmail: email })
    .toArray();
  return NextResponse.json(result);
};

export const POST = async (req) => {
  const body = await req.json();

  const paymentHistoryCollection = dbConnect(
    collectionNamesObj.paymentHistoryCollection
  );
  const result = await paymentHistoryCollection.insertOne(body);

  return NextResponse.json(result);
};
