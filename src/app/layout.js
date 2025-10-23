import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
