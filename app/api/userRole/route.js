import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const userCollection = dbConnect(collectionNamesObj.userCollection);
  const result = await userCollection
    .find({ email: email }, { projection: { role: 1, _id: 0 } })
    .toArray();
  return NextResponse.json(result);
};
