import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bilal Antaki | Software Robotics Engineer",
  description: "Portfolio of Bilal Antaki - Software Robotics Engineer specializing in ROS2, autonomous systems, embedded systems, and UAV design.",
  keywords: ["Robotics", "ROS2", "Software Engineer", "Autonomous Systems", "Embedded Systems", "UAV", "SLAM", "Computer Vision"],
  authors: [{ name: "Bilal Antaki" }],
  openGraph: {
    title: "Bilal Antaki | Software Robotics Engineer",
    description: "Portfolio of Bilal Antaki - Software Robotics Engineer specializing in ROS2, autonomous systems, embedded systems, and UAV design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
