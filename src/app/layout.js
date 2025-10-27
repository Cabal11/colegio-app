import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Colegio Bocas de Nosara",
  description: "Sitio Web oficial del colegio Bocas de Nosara",
  url: "https://colegio-nosara.vercel.app",
  siteName: "Colegio Bocas de Nosara",
  icons: {
    icon: "/Nuevo_logo.webp",
  },
  openGraph: {
    image: ["/Nuevo_logo.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Carga del script principal de GA */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2T0GPVTL7Q"
          strategy="afterInteractive"
        />

        {/* Configuración de Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-2T0GPVTL7Q', {page_path: window.location.pathname,});
                `}
        </Script>
      </head>
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
