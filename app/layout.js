import Header from "../components/Regions/Header";
import Footer from "../components/Regions/Footer";

import "../sass/global.scss";

export const metadata = {
  title: "IST 363 Spotfiy",
  description:
    "An application powered by Wordpress, React, Next.js and Spotify API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
