import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

const handler = handleAuth();

export const GET = async (req) => {
  console.log("Received request:", req.method);

  const res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  res.headers.set("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS request");
    return new NextResponse(null, { status: 200 });
  }

  try {
    console.log("Invoking the authentication handler");
    return handler(req, res);
  } catch (error) {
    console.error("Error in auth handler:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Internal Server Error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
};
