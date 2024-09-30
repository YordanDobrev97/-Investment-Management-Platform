import type { Metadata } from "next";
import "./globals.scss";

import Navbar from "imp/components/Navbar";

export const metadata: Metadata = {
  title: "Investment Managment Platform",
  description: "Investment Managment Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
