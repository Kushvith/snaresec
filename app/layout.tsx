import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SnareSec: Catch Hackers Before They Attack",
  description: "Deploy lightweight, real-time honeypot scripts to detect SQLi, XSS, LFI, and more threats. Plug & play in seconds to stay one step ahead of attackers.",
  keywords: ["honeypot", "cybersecurity", "threat detection", "XSS", "SQLi", "LFI", "deception technology", "SnareSec"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Set the default font to the body font */}
      <body className="font-body bg-web-bg text-text-dark">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}