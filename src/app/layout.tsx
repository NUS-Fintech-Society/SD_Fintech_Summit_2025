import "./globals.css";
export const metadata = {
  title: "NUS Fintech Summit 2025",
  description: "NUS Fintech Summit 2025",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
