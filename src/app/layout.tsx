import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "./(public)/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });
  
export const metadata: Metadata = {
  title: "WorkWize",
  description: "WorkWize",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
