import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <script src="js/jquery-1.11.0.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/script.js"></script>
    </Html>
  );
}
