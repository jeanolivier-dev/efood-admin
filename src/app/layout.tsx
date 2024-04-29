import { Montserrat } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "../../providers/NextAuthSessionProvider";
import ToastProvider from "../../providers/ToastProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "EFOOD - Application de menu digital",
  description: "Application de menu digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <ToastProvider />
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
