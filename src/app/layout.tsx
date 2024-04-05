import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fast History",
  description: "App de controle de histórico de League of Legends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className='dark'>
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
