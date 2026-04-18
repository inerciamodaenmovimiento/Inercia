// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "INERCIA | Moda en Movimiento",
  description: "Tienda de moda minimalista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Fuente elegante para el estilo DAZE */}
        <link href="https://googleapis.com" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
