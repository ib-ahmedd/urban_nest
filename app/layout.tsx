import React from "react";
import "./globals.css";
import { Footer, Navbar } from "@components";

export const metadata = {
  title: "Urban Nest",
  description: "Build Your Dream",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="w-full">
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
