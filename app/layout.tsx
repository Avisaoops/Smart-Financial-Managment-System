import type { Metadata } from "next";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";


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
    <html lang="en">
      <body
        className={InterFont.className }
      >
        {/*header*/}
        <header> </header>
        {/*for accesibility*/}
        <main className="min-h-screen "> 
         {children} 
        </main>
        
        {/*footer*/}
        <footer className='bg-blue-50 py-12'>
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>
              made with love by Avisa and Maryam
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
