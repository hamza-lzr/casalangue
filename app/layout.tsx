import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CasaLangue | Cours d’anglais à Casablanca",
  description: "Progressez en anglais avec des cours pratiques en petits groupes à Casablanca. Test de niveau gratuit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
