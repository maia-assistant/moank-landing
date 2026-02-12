import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavbarB from "@/components/variant-b/NavbarB";
import FooterB from "@/components/variant-b/FooterB";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moank Värdepapperslån | PAM Capital",
  description: "Låna pengar med dina värdepapper som säkerhet. Konkurrenskraftig ränta och snabb handläggning.",
};

export default function VariantBLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        <NavbarB />
        {children}
        <FooterB />
      </body>
    </html>
  );
}
