// "use client";

// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Page() {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   if (!session) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <p className="text-xl font-semibold mb-4">You are not logged in</p>
//         <button
//           onClick={() => signIn()}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           Sign In
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Profile</h2>
//       <div className="flex items-center space-x-4">
//         <img
//           src={session.user.photo}
//           alt="Profile Picture"
//           className="w-20 h-20 rounded-full border"
//         />
//         <div>
//           <p className="text-lg font-semibold">{session.user.name}</p>
//           <p className="text-gray-600">{session.user.email}</p>
//         </div>
//       </div>
//       <button
//         onClick={() => signOut()}
//         className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//       >
//         Sign Out
//       </button>
//     </div>
//   );
// }

"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome!</h2>
          <p className="text-gray-600 mt-2">
            Please sign in to access your profile.
          </p>
          <button
            onClick={() => signIn()}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex items-center space-x-4">
          <img
            src={session.user.photo || "/default-avatar.png"}
            alt="Profile Picture"
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {session.user.name}
            </h2>
            <p className="text-gray-600">{session.user.email}</p>
          </div>
        </div>

        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Account Details
          </h3>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>🌍 Location: Bangladesh</li>
            <li>📅 Member since: {new Date().getFullYear()}</li>
            <li>🔑 Authentication: NextAuth</li>
          </ul>
        </div>

        <button
          onClick={() => signOut()}
          className="mt-6 w-full px-4 py-2 bg-black text-white rounded-sm"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
