import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localeFont from "next/font/local";
import "./globals.css";
import "./styles/utilities.css";
import { Footer, Header } from "@/components/shared";
export const metadata: Metadata = {
  title: "motion study",
  description: "Generated by create next app",
};
const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const gilroyRegular = localeFont({
  src: [
    {
      path: "../../public/fonts/gilroy/Gilroy-Regular.ttf",
    },
  ],
  variable: "--font-gilroy-regular",
});
const gilroyMedium = localeFont({
  src: [
    {
      path: "../../public/fonts/gilroy/Gilroy-medium.ttf",
    },
  ],
  variable: "--font-gilroy-medium",
});
const gilroyBold = localeFont({
  src: [
    {
      path: "../../public/fonts/gilroy/Gilroy-Semibold.ttf",
    },
  ],
  variable: "--font-gilroy-bold",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${gilroyRegular.variable} ${gilroyMedium.variable} ${gilroyBold.variable}`}
      >
        <div className="min-h-screen flex flex-col overflow-clip">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
