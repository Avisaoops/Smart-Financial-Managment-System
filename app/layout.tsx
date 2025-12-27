import type { Metadata } from "next";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "sonner";


const InterFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Financial Management System",
  description: "One stop finance platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logodesign.jpg" sizes="any" />
        </head>
        <body className={`${InterFont.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors /> 

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by Avisa and Maryam</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
