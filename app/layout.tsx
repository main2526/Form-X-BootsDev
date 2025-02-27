import type { Metadata } from "next";
import{ Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  weight : '500'
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.className}`}
      >
      
        {children}
      </body>
    </html>
  );
}
