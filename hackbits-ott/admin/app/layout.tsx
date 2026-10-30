import type { Metadata } from "next";
import { BRAND } from "@hackbits/shared";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "HACKBITS OTT Admin", template: "%s · HACKBITS OTT" },
  description: BRAND.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
