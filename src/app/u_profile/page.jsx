import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { getUser } = getKindeServerSession();
  let user = null;

  try {
    user = await getUser();
  } catch (error) {
    console.error(error);
  }

  if (!user) {
    redirect("/api/auth/login");
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
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome to your profile, {user?.name}
          </h1>
        </div>
      </div>
    </div>
  );
}
