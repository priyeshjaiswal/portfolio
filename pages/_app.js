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
        <title>Priyesh Jaiswal - Full Stack Developer | Portfolio</title>
        <meta name="description" content="Priyesh Jaiswal is a Full Stack Developer based in New Delhi, India. Explore portfolio, skills, experience, and contact for web development, backend, frontend, and cloud solutions." />
        <meta name="keywords" content="Priyesh Jaiswal, Full Stack Developer, Web Developer, Portfolio, Node.js, React, Next.js, AWS, API, New Delhi, India, Software Engineer, Freelance Developer" />
        <meta name="author" content="Priyesh Jaiswal" />
        <meta property="og:title" content="Priyesh Jaiswal - Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Priyesh Jaiswal, Full Stack Developer. Specializing in modern web development, backend, frontend, and cloud solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:image" content="/about-me.jpg" />
        <link rel="shortcut icon" type="image/x-icon" href="/static/img/about-me.jpg" />
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
