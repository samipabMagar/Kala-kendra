import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pokhara Kala Kendra - Cultural Dress Rental & Dance Classes",
  description:
    "Rent Nepal's cultural dresses including Magar, Tharu, Rai, and join our dance classes at Pokhara Kala Kendra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-[family-name:var(--font-poppins)]">
        <Header />
        {children}
      </body>
    </html>
  );
}
