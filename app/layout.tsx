import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

export const metadata: Metadata = {
  title: "My Portfolio | Product Designer",
  description: "Portfolio of a product designer specializing in building exceptional digital experiences.",
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${plusJakarta.variable} font-sans antialiased text-zinc-900 dark:text-zinc-50`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
