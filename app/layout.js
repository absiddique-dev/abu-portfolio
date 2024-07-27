import { Preahvihear } from "next/font/google";
// import { Montserrat } from "next/font/google";
// import { ThemeProvider } from "./providers";
import "./globals.css";

import "./globals.css";
import { ThemeProvider } from "./providers";
// import { ThemeProvider } from "next-themes";

const preahvihear = Preahvihear({
  subsets: ["latin"], // Specify the subsets you want to use
  weight: "400", // Specify the font weights you want to use (optional)
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
    <html lang="en" suppressHydrationWarning>
      <body className={preahvihear.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
