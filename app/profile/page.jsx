"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl font-semibold mb-4">You are not logged in</p>
        <button
          onClick={() => signIn()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="flex items-center space-x-4">
        <img
          src={session.user.photo}
          alt="Profile Picture"
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <p className="text-lg font-semibold">{session.user.name}</p>
          <p className="text-gray-600">{session.user.email}</p>
        </div>
      </div>
      <button
        onClick={() => signOut()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
}
