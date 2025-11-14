import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-wrap min-h-screen flex flex-col">
      <Navbar />
      <main className="mt-20 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
