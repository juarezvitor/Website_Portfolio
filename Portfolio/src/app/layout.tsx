import type { Metadata } from "next";
import "./globals.css";
import 'aos/dist/aos.css';
import { AosInit } from "@/components/aos-init";

export const metadata: Metadata = {
  title: "Portfolio Juarez Vitor",
  description: "Desenvolvido por Juarez Vitor, Web Developer Full-Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
          <AosInit />
        </body>

    </html>
  );
}
