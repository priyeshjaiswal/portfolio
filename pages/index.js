import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Priyesh Jaiswal</h1>
                  <p className="lead">
                    I Am Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    I am a passionate Full Stack Developer based in New Delhi, India, specializing in building scalable web applications, modern websites, APIs, and cloud solutions. With 8+ years of experience, I help businesses and startups grow with robust, secure, and innovative technology.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="/assets/docs/Priyesh Jaiswal CV.pdf" download>
                      Donwload CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Blog */}
      {/* <Blog /> */}
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
