import { Inter, Cormorant_Garamond, Syne } from "next/font/google";
import "./globals.css";
import CursorLight from "@/components/CursorLight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt">
      <body
        className={`${inter.variable} ${cormorant.variable} ${syne.variable} antialiased font-syne`}
      >
        <CursorLight />
        {children}
      </body>
    </html>
  );
}
