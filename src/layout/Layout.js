import { Fragment } from "react";
import Script from "next/script"; // ✅ Import Script from next
import ImageView from "../components/ImageView";
import BackBtn from "./BackBtn";
import DayNightMood from "./DayNightMood";
import Header from "./Header";
import WhatsAppButton from "../components/WhatsAppButton";

const Layout = ({ children, blog }) => {
  return (
    <Fragment>
      {/* ✅ Google Analytics (GA4) Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-JPTNPLWPPH"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JPTNPLWPPH');
    `,
        }}
      />

      {/* ✅ Tawk.to Live Chat Script */}
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68504cbe6134f7190de0778e/1itsqniom';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />

      <ImageView />
      {/* Header Start */}
      <Header blog={blog} />
      {/* Main Start */}
      <main className="main-left pp-main-section">{children}</main>
      <DayNightMood />
      {blog && <BackBtn />}
      <WhatsAppButton />
    </Fragment>
  );
};

export default Layout;
