import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "../styles/globals.css"; 

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});;

export const metadata: Metadata = {
  title: "Nazheef Thareq - Fullstack Developer & Video Editor",
  description: "Nazheef Thareq, freelancer IT & kreatif. Spesialis UI/UX, web & mobile app development, graphic design, video editing, hingga motion graphic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
