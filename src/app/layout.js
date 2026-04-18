import "./globals.css";

export const metadata = {
  title: "INERCIA | Studio",
  description: "Minimalist Fashion Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
