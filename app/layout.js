import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ModalProvider } from "./context/ModelContext";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";

// Configure Poppins
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// Configure Nunito
const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "eTab ERP Solutions",
  description: "School management software for modern education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="antialiased relative bg-white font-nunito">
        <Navbar />
        <ModalProvider>{children}</ModalProvider>
        <ToastContainer position="top-right" theme="light" />
        <ScrollToTop />
      </body>
    </html>
  );
}
