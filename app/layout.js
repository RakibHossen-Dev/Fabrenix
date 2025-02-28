import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/Providers/NextAuthProvider";
const roboto = Roboto({
  weight: ["400", "700"], // Add the required weights
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["400", "700"], // Add the required weights
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Fabrenix",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <NextAuthProvider>
          <Navber />
          <div className="min-h-[450px]">{children}</div>
          <Footer />
          <Toaster position="top-center" />
        </NextAuthProvider>
      </body>
    </html>
  );
}
