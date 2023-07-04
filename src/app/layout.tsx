import Head from "next/head";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/img/farie_favicon.png" />
        <meta name="description" content="Farie" />
        <title>Farie – Gebrauchte Fahrzeuge online kaufen mit Garantie</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
