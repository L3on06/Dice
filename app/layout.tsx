import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dicce Game",
  description: "Roll & Win Dice Game: Roll the dice and match the numbers to win points. The player with the highest score after a set number of rounds wins! Easy to learn, addictive fun for all ages.",
  icons: {
    icon: ['/icon.png'],
    apple: ['/icon.png'],
    shortcut: ['/icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
