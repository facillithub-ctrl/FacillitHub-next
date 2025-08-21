import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css"; // A importação de CSS deve vir primeiro

const encodeSans = Encode_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-encode-sans',
});

export const metadata: Metadata = {
  title: "Facillit Hub - Sua jornada digital mais simples e eficaz",
  description: "Uma central de soluções digitais que integra educação, produtividade e bem-estar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* A classe da fonte deve estar no <html>, e o body deve ser simples */}
      <body className={encodeSans.className}> 
        {children}
      </body>
    </html>
  );
}