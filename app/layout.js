import "../sass/global.scss";

export const metadata = {
  title: "IST 363 Spotfiy",
  description:
    "An application powered by Wordpress, React, Next.js and Spotify API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
