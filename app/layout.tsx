import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header/header";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
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
        className={`flex min-h-screen flex-col font-sans antialiased
          ${inter.variable} ${playfair.variable}`}
      >
        <Header />
        <main className="grow page-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
