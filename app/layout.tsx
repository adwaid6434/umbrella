import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Inter, Playfair_Display } from "next/font/google";

// 1. Configure the fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Creates a CSS variable for Inter
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // Creates a CSS variable for Playfair
  display: "swap",
});

export const metadata = {
  title: "ÆTHER.UMBRELLA - by Adwaid",
  description: "The liquid glass shield. Zero permeability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 2. Inject the font variables into the HTML tag
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
