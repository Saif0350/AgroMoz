import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/HeaderAndFooter/Footer";
import NewHeader from "@/components/HeaderAndFooter/NewHeader";
import NextTopLoader from "nextjs-toploader";
import Announcement from "@/components/HeaderAndFooter/Announcement";
import FloatingButton from "@/components/FloatingButton";
import { ToastContainer } from "react-toastify";

export const menuItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about-us",
  },
  {
    name: "Commitment",
    url: "/commitment",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact",
    url: "/contact-us",
  },
  // {
  //   name: "Blogs",
  //   url: "/blogs",
  // },
];

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} easing="ease" color="#fff" />
        <Announcement />
        <NewHeader />
        {children}
        <ToastContainer />
        {/* <FloatingButton /> */}
        <Footer />
      </body>
    </html>
  );
}
