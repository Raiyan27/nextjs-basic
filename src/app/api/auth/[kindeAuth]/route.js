import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

const handler = handleAuth();

export const GET = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  try {
    return handler(req, res);
  } catch (error) {
    console.error("Error in auth handler:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
