import "./globals.css";
import { headers } from "next/headers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Colegio Bocas de Nosara",
  description: "Web oficial en prueba para el colegio Bocas de Nosara",
  url: "https://liceonosaradev.netlify.app",
  siteName: "Colegio Bocas de Nosara",
  icons: {
    icon: "/Nuevo_logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
