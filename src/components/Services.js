import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Custom Website Development</h5>
                <p>
                  Specialized in creating custom websites using WordPress and Shopify platforms.
                  From e-commerce solutions to business websites, I deliver tailored web experiences
                  that match your brand and business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Mobile App Development</h5>
                <p>
                  Expert in developing cross-platform mobile applications using Flutter and React Native.
                  Create powerful, native-like mobile experiences that work seamlessly across iOS and Android
                  platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>SEO Optimization</h5>
                <p>
                  Boost your online visibility with comprehensive SEO strategies.
                  From technical optimization to content strategy, I help your website
                  rank higher in search results and attract more organic traffic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-megaphone" />
              <div className="feature-content media-body">
                <h5>Social Media Marketing</h5>
                <p>
                  Drive engagement and grow your brand presence through strategic
                  social media marketing campaigns. Create compelling content and
                  manage your social media presence across multiple platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-cart" />
              <div className="feature-content media-body">
                <h5>E-commerce Solutions</h5>
                <p>
                  Build powerful online stores with Shopify or WooCommerce.
                  From store setup to custom features and payment integration,
                  I create e-commerce solutions that drive sales and growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-tools" />
              <div className="feature-content media-body">
                <h5>Website Maintenance</h5>
                <p>
                  Keep your website running smoothly with regular maintenance,
                  updates, security patches, and performance optimization.
                  Ensure your online presence remains secure and up-to-date.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <Testimonials />
      </div>
    </section>
  );
};
export default Services;
