import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Risus Estetski Centar | Zadar",
  description:
    "Medicinski dokazani estetski tretmani za lice i tijelo u luksuznom okruženju u Zadru. Hydrafacial, Dermapen, laserska epilacija, Medisculpt i više.",
  keywords: "estetski centar, Zadar, Hydrafacial, Dermapen, laserska epilacija, Medisculpt, tretmani lica",
  openGraph: {
    title: "Risus Estetski Centar | Zadar",
    description: "Medicinski dokazani tretmani za lice i tijelo u Zadru.",
    locale: "hr_HR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
