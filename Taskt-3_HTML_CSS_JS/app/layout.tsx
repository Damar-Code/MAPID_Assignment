import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Nav from "@/components/Home/Navbar/Nav";
import ThemeToggler from "@/components/Helper/ThemeToggler";

const font = Inter({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Damar Portofolio",
  description: "Portofolio website using next.js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased bg-[#1D1D1F] min-h-screen text-white relative`}>
        <Provider>
          <ResponsiveNav/>
          {children}
        </Provider>
      </body>

    </html>
  );
}