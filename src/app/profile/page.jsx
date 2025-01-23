import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function Profile() {
  const user = localStorage.getItem("user");

  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-white shadow-lg rounded-lg max-w-4xl w-full p-6 space-x-6">
        <img
          src={user.picture}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 ">
            Welcome to your profile, {user.given_name}!
          </h1>
          <p className="text-lg text-gray-600">Email: {user.email}</p>
          {user.username && (
            <p className="text-lg text-gray-600">Username: {user.username}</p>
          )}
          {user.phone_number && (
            <p className="text-lg text-gray-600">Phone: {user.phone_number}</p>
          )}
        </div>
      </div>
    </div>
  );
}
