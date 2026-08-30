import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://casalangue.vercel.app"),
  title: "CasaLangue — Démo fictive de solution sur mesure",
  description: "Découvrez une démonstration interactive et les possibilités d’une solution numérique conçue sur mesure pour votre activité.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "CasaLangue — Démo fictive de solution sur mesure",
    description: "Une expérience interactive qui illustre la conception d’une solution numérique adaptée à une activité réelle.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CasaLangue — Démonstration fictive",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CasaLangue — Démo fictive de solution sur mesure",
    description: "Une expérience interactive qui illustre la conception d’une solution numérique adaptée à une activité réelle.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
