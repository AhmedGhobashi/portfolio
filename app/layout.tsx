import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/HOC/Provider";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Inter({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "Ghobashi's Portfolio",
  description: "My first portfolio using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${font.className} h-full antialiased` }
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
