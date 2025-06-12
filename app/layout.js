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
  title: "eTab ERP Solutions | Best School ERP & AI Software in India",
  description:
    "eTab offers advanced School ERP and AI-based automation solutions for schools, colleges, and educational institutions. Simplify admissions, fees, attendance, and more.",
  keywords:
    "School ERP, School Management Software, AI for schools, Education ERP, eTab ERP, student management system, fee management, school automation, admission software",
  openGraph: {
    title: "eTab ERP Solutions",
    description:
      "Advanced School ERP and AI Software to manage your entire institution.",
    url: "https://etaberp.in",
    siteName: "eTab ERP",
    images: [
      {
        url: "https://etaberp.in/images/eTab.png",
        width: 1200,
        height: 630,
        alt: "eTab ERP Solutions Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eTab ERP Solutions",
    description: "Best School ERP and AI-based Automation Solutions",
    images: ["https://etaberp.in/images/eTab.png"],
  },
  icons: {
    icon: "/fv.png",
  },
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
