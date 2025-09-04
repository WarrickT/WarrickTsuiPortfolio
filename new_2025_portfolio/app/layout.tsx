// Overall wrapper of project 
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import ScrollToTop from "../components/Helper/ScrollToTop";
import Footer from "../components/Home/Footer/Footer";
import ResponsiveNav from "../components/Home/Navbar/ResponsiveNav";

import "./globals.css";
// const font= Inter({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
// }
// )
const font= JetBrains_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
}
)

export const metadata: Metadata = {
  title: "Warrick Tsui Portfolio",
  description: "Portfolio built with Nextjs 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
