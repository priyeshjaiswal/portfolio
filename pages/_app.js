import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/glitch.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Priyesh Jaiswal - Full Stack Developer in Delhi | Freelance Web Developer</title>
        <meta
          name="description"
          content="Hire Priyesh Jaiswal - a professional Full Stack Developer in Delhi, India. Specialized in MERN stack, scalable APIs, cloud deployment, and real-time IoT apps. Let's build something amazing together."
        />
        <meta
          name="keywords"
          content="Full Stack Developer Delhi, Freelance Web Developer India, React Developer, Node.js Developer, MERN Stack Expert, Next.js Developer, IoT Developer, Software Engineer Delhi, API Developer, AWS Freelancer India"
        />
        <meta name="author" content="Priyesh Jaiswal" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Priyesh Jaiswal - Full Stack Developer in Delhi" />
        <meta
          property="og:description"
          content="Explore portfolio of Priyesh Jaiswal - Freelance Full Stack Developer India | React, Node.js, IoT, AWS. Hire me to build high-performance apps."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://priyeshjaiswal.com/" />
        <meta property="og:image" content="https://www.priyeshjaiswal.com/static/img/home-banner.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Priyesh Jaiswal - Full Stack Developer | Portfolio" />
        <meta
          name="twitter:description"
          content="Freelance Web Developer from Delhi. React, Node.js, APIs, Cloud, IoT. Hire me for modern web development."
        />
        <meta name="twitter:image" content="https://www.priyeshjaiswal.com/static/img/home-banner.png" />

        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="/static/img/about-me.jpg" />
      </Head> 
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
