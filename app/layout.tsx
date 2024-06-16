import React from "react";
import "./globals.css";
import { Footer, Navbar } from "@components";
import Head from "next/head";

export const metadata = {
  title: "Urban Nest",
  description: "Build Your Dream",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="w-full overflow-x-hidden">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="w-full overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

interface RootLayoutProps {
  children: React.ReactNode;
}
