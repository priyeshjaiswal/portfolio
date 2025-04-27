import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="static/plugin/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="static/plugin/font-awesome/css/all.min.css" />
        <link rel="stylesheet" href="static/plugin/et-line/style.css" />
        <link rel="stylesheet" href="static/plugin/themify-icons/themify-icons.css" />
        <link rel="stylesheet" href="static/plugin/owl-carousel/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="static/plugin/magnific/magnific-popup.css" />
        <link rel="stylesheet" href="static/plugin/scroll/jquery.mCustomScrollbar.min.css" />
        <link rel="stylesheet" href="static/css/style.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 