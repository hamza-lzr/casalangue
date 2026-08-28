import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://casalangue.vercel.app"),
  title: "CasaLangue — Démo Interactive & Capture WhatsApp | Hamza Lazaar",
  description: "Découvrez cette démonstration de site web moderne à forte conversion avec tunnel WhatsApp. Solutions numériques sur mesure conçues par Hamza Lazaar.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "CasaLangue — Démo Site Web Haute Conversion & Capture WhatsApp",
    description: "Prototype interactif de landing page avec tunnel de capture WhatsApp. Conçu par Hamza Lazaar, concepteur de solutions numériques sur mesure.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CasaLangue — Démo par Hamza Lazaar",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CasaLangue — Démo Interactive & Capture WhatsApp | Hamza Lazaar",
    description: "Exemple de landing page moderne avec tunnel de capture WhatsApp. Conçu par Hamza Lazaar pour entreprises et professionnels.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
