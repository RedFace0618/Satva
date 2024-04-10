import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./layout/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Satva",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex bg-main justify-center gap-4">
          <div className="w-72">
            <Sidebar />
          </div>
          <main className={inter.className}>{children}</main>
        </div>
      </body>
    </html>
  );
}
