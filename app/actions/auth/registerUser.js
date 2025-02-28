"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNamesObj.userCollection);

  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    return {
      success: true,
      insertedId: result.insertedId.toString(),
    };
  }
  return { success: false, message: "User already exists!" };
};
