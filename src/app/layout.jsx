import Navbar from "@/components/Navbar";
import "./globals.css";
import { AuthProvider } from "./AuthProvider";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
