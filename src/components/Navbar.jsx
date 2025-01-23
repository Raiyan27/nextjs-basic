import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log("navbar:", user);

  return (
    <div className="bg-gray-300">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto p-4">
        <div>LOGO</div>
        <div>
          <ul className="flex space-x-4">
            <Link href="/">
              <li className="btn px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-50">
                Home
              </li>
            </Link>
            {user ? (
              <>
                <Link href="/profile">
                  <li className="btn px-4 py-2  rounded-md bg-gray-100 hover:bg-gray-50">
                    Profile
                  </li>
                </Link>
                <Link href="/api/auth/logout">
                  <li className="btn px-4 text-white py-2 rounded-md bg-red-600 hover:bg-red-500">
                    Logout
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link href="/api/auth/register">
                  <li className="btn px-4 py-2 rounded-md bg-blue-300 hover:bg-blue-200">
                    Register
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
