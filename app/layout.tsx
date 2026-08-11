import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Snoopy's Corner Dog Grooming | Dog Groomer in Seabrook, TX",
  description: "Dog grooming in Seabrook, TX at 2014 Bayport Blvd. Baths, haircuts, nail trims, Doodle cuts, and gentle care for nervous pups up to 80 lbs. Text (832) 226-9485 to book.",
  robots: site.previewMode
    ? { index: false, follow: false, googleBot: { index: false, follow: false } }
    : { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
