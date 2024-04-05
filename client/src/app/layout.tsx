import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from '@/components/ReactQueryProvider';

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Warehouse dashboard",
  description: "warehouse dashboard app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
