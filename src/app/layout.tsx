import type { Metadata } from "next";
import { Be_Vietnam_Pro, Montserrat } from "next/font/google";
import AOSInitializer from "./components/AOSInitializer";
import { Toaster } from "sonner";
import "./globals.css";


const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vietnam-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vietnam-sans",
});

export const metadata: Metadata = {
  title: "Bob-theo Global Services",
  description: "Logistics, containers and marine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.variable} font-sans antialiased`}
      >
        <AOSInitializer />
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
