// import { authOptions } from "@/lib/authOptions";
// import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";

// export const DELETE = async (req) => {
//   const session = await getServerSession(authOptions);
//   const email = session?.user?.email;
//   if (!email) {
//     return res.status(400).send({ error: "User email is required" });
//   }

//   const cartCollection = dbConnect(collectionNamesObj.cartCollection);
//   const result = await cartCollection.deleteMany({ email: email });

//   return NextResponse.json(result);
// };

// // export const DELETE = async (req) => {
// //   const session = await getServerSession(authOptions);
// //   const email = session?.user?.email;

// //   if (!email) {
// //     return NextResponse.json(
// //       { error: "User email is required" },
// //       { status: 400 }
// //     );
// //   }

// //   const db = await dbConnect();
// //   const cartCollection = db.collection(collectionNamesObj.cartCollection);

// //   const result = await cartCollection.deleteMany({ email: email });

// //   return NextResponse.json({ success: true, result });
// // };
