"use client";

import { ReduxProvider } from "@/redux/provider";
import { Inter } from "next/font/google";

import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>E-commerce</title>
      </head>
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
