import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Stylish</title>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="author" content="TemplatesJungle" />
      <meta name="keywords" content="Online Store" />
      <meta name="description" content="Stylish" />

      <link rel="stylesheet" href="css/vendor.css" />
      <link rel="stylesheet" type="text/css" href="style.css" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,900;1,900&family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
        rel="stylesheet"></link>
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
