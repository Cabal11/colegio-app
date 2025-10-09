import "./globals.css";
import { headers } from "next/headers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  OpenGraph: {
    title: 'Colegio Bocas de Nosara',
    description: 'Web oficial en prueba para el colegio Bocas de Nosara',
    url: 'https://liceonosaradev.netlify.app',
    siteName: 'Colegio Bocas de Nosara',
    images: {
      url: 'https://liceonosaradev.netlify.app/logo-nuevo.PNG',
      width: 1200,
      height: 630,
    }
  }
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
