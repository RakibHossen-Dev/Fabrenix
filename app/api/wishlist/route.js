import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  console.log(session?.user?.email);
  if (session) {
    const email = session?.user?.email;
    const wishlistCollection = dbConnect(collectionNamesObj.wishlistCollection);
    const result = await wishlistCollection.find({ email }).toArray();
    return NextResponse.json(result);
  }
};
