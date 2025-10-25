import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollManager from "@/components/ScrollManager";
import TerminalButton from "@/components/TerminalButton";
import ChapriChat from "@/components/ChapriChat";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Alok Kumar",
  description: "Portfolio of Alok Kumar - Software Engineer specializing in AI/ML, Full-Stack Development, and innovative solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ScrollManager />
        <Navbar />
        {children}
        <TerminalButton />
        <ChapriChat />
      </body>
    </html>
  );
}
