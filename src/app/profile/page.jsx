import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { NextResponse } from "next/server";

export default async function Profile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return (
      <div>
        <h1>You are not logged in</h1>
        <Link href="/api/auth/login">Login</Link>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-white shadow-lg rounded-lg max-w-4xl w-full p-6 space-x-6">
        <img
          src={"https://placehold.co/400"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 ">
            Welcome to your profile
          </h1>
        </div>
      </div>
    </div>
  );
}
