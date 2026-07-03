import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Beltway Chimney | Professional Chimney Services",
  description: "Certified chimney inspection, cleaning, gas/oil flue sweeping, and creosote removal serving the MD, DC, and VA metropolitan area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: "1 0 auto" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
