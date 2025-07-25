import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import Header from "../../components/Header";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "200", "100"],
});

export const metadata = {
  title: "Laundry Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSans.variable} antialiased`}
    >
      <body className={dmSans.className}>
        <Header />
        <Background />
        {children}
      </body>
    </html>
  );
}
