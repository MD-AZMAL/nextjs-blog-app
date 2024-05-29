import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import { heebo } from "@/lib/utils";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Blog App",
  description: "NextJS blog app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <main className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-col pt-[68px] md:pt-[80px] w-full min-h-screen">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
