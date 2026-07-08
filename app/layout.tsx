import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Origin Foods | OEM Nutraceutical Manufacturing",
  description:
    "The Origin Foods supports OEM nutraceutical and functional food manufacturing in Malaysia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
