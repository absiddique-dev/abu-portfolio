// import { preahvihear } from "next/font/google";
import { Montserrat } from "next/font/google";

import "./globals.css";

const preahvihear = Montserrat({
  subsets: ["latin"], // Specify the subsets you want to use
  weight: "600", // Specify the font weights you want to use (optional)
  style: "normal", // Specify the style (optional)
  display: "swap", // Control font display behavior (optional)
});

export const metadata = {
  title: "Portfolio - AB Siddique | Web developer | Freelancer | redrosesid",
  description:
    "AB Siddique is a website and app developer , doing freelance and provide service world wide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={preahvihear.className}>{children}</body>
    </html>
  );
}
