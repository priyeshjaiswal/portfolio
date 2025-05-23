import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>My Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All
            </li>
            <li
              className={`c-pointer ${activeBtn("Websites")}`}
              onClick={handleFilterKeyChange("Websites")}
              data-filter=".Websites"
            >
              Websites
            </li>
            <li
              className={`c-pointer ${activeBtn("GraphicDesign")}`}
              onClick={handleFilterKeyChange("GraphicDesign")}
              data-filter=".GraphicDesign"
            >
              Graphic Design
            </li>
            <li
              className={`c-pointer ${activeBtn("AppDevelopment")}`}
              onClick={handleFilterKeyChange("AppDevelopment")}
              data-filter=".AppDevelopment"
            >
              App Development
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          {/* grid item */}
          <div className="grid-item Websites">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Nebesa Organics</h5>
                <span>Natural skincare Brand</span>
              </div>
              <div className="portfolio-img">
                <Image
                  src="/static/img/nebesa.png"
                  alt="Nebesa Organics"
                  width={400}
                  height={400}
                  style={{
                    height: '400px',
                    width: '100%',
                    objectFit: 'cover',
                    maxWidth: '400px',
                  }}
                  className="portfolio-img-responsive"
                />
                <style jsx>{`
                  @media (max-width: 767px) {
                    .portfolio-img-responsive {
                      height: 600px !important;
                      max-width: 100% !important;
                    }
                  }
                `}</style>
                <div className="portfolio-icon">
                  <a
                    href="/static/img/nebesa.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

          <div className="grid-item GraphicDesign">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">letCumers Closet</h5>
                <span>Banner Design</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/graphic/1.png" alt="letCumers Closet" width={400} height={400} 
                  style={{
                    height: '400px',
                    width: '400px',
                    objectFit: 'cover',
                  }}
                  className="portfolio-img-responsive graphic-design"
                />
                <style jsx>{`
                  @media (min-width: 768px) {
                    .graphic-design {
                      height: 400px !important;
                      width: 400px !important;
                      max-width: 400px !important;
                    }
                  }
                  @media (max-width: 767px) {
                    .portfolio-img-responsive {
                      height: 600px !important;
                      max-width: 100% !important;
                    }
                  }
                `}</style>
                <div className="portfolio-icon">
                  <a
                    href="/static/img/graphic/1.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item Websites">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Ozomax</h5>
                <span>Electronic items</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/ozomax.png" alt="Ozomax" width={400} height={500} />
                <div className="portfolio-icon">
                  <a
                    href="/static/img/ozomax.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}

          <div className="grid-item GraphicDesign">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Nekka India</h5>
                <span>Banner Design</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/graphic/2.png" alt="Nekka India" width={400} height={400} 
                  style={{
                    height: '400px',
                    width: '400px',
                    objectFit: 'cover',
                  }}
                  className="portfolio-img-responsive graphic-design"
                />
                <style jsx>{`
                  @media (min-width: 768px) {
                    .graphic-design {
                      height: 400px !important;
                      width: 400px !important;
                      max-width: 400px !important;
                    }
                  }
                  @media (max-width: 767px) {
                    .portfolio-img-responsive {
                      height: 600px !important;
                      max-width: 100% !important;
                    }
                  }
                `}</style>
                <div className="portfolio-icon">
                  <a
                    href="/static/img/graphic/2.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item Websites">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Veron Institute </h5>
                <span>Coaching Institute</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/veron.png" alt="Veron Institute" width={400} height={500} />
                <div className="portfolio-icon">
                  <a
                    href="/static/img/veron.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item Websites">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Volunteer Yatra </h5>
                <span>Travelling Platform</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/volunteer-yatra.png" alt="Volunteer Yatra" width={400} height={500} />
                <div className="portfolio-icon">
                  <a
                    href="/static/img/volunteer-yatra.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}


          <div className="grid-item GraphicDesign">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Raj Consultancy</h5>
                <span>logo Design</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/graphic/4.png" alt="Raj Consultancy" width={400} height={400} 
                  style={{
                    height: '400px',
                    width: '400px',
                    objectFit: 'cover',
                  }}
                  className="portfolio-img-responsive graphic-design"
                />
                <style jsx>{`
                  @media (min-width: 768px) {
                    .graphic-design {
                      height: 400px !important;
                      width: 400px !important;
                      max-width: 400px !important;
                    }
                  }
                  @media (max-width: 767px) {
                    .portfolio-img-responsive {
                      height: 600px !important;
                      max-width: 100% !important;
                    }
                  }
                `}</style>
                <div className="portfolio-icon">
                  <a
                    href="/static/img/graphic/4.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}

          {/* grid item */}
          <div className="grid-item Websites">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Comhard Technologies </h5>
                <span>IT Company</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/comhard-tech.png" alt="Comhard Technologies" width={400} height={500} />
                <div className="portfolio-icon">
                  <a
                    href="/static/img/comhard-tech.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}

          <div className="grid-item GraphicDesign">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Times Global </h5>
                <span>logo Design & Branding</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/graphic/5.png" alt="Times Global" width={400} height={400} 
                  style={{
                    height: '400px',
                    width: '400px',
                    objectFit: 'cover',
                  }}
                  className="portfolio-img-responsive graphic-design"
                />
                <style jsx>{`
                  @media (min-width: 768px) {
                    .graphic-design {
                      height: 400px !important;
                      width: 400px !important;
                      max-width: 400px !important;
                    }
                  }
                  @media (max-width: 767px) {
                    .portfolio-img-responsive {
                      height: 600px !important;
                      max-width: 100% !important;
                    }
                  }
                `}</style>
                <div className="portfolio-icon">
                  <a
                    href="/static/img/graphic/5.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

          <div className="grid-item GraphicDesign">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">let Cumers Closet </h5>
                <span>logo Design & Branding</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/graphic/6.png" alt="let Cumers Closet" width={400} height={400} 
                  style={{
                    height: '400px',
                    width: '400px',
                    objectFit: 'cover',
                  }}
                  className="portfolio-img-responsive graphic-design"
                />
                <style jsx>{`
                  @media (min-width: 768px) {
                    .graphic-design {
                      height: 400px !important;
                      width: 400px !important;
                      max-width: 400px !important;
                    }
                  }
                  @media (max-width: 767px) {
                    .portfolio-img-responsive {
                      height: 600px !important;
                      max-width: 100% !important;
                    }
                  }
                `}</style>
                <div className="portfolio-icon">
                  <a
                    href="/static/img/graphic/6.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}

          <div className="grid-item GraphicDesign">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Wedding Card Invitation </h5>
                <span>Poster Design</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/graphic/7.png" alt="Wedding Card Invitation" width={400} height={400} 
                  style={{
                    height: '400px',
                    width: '400px',
                    objectFit: 'cover',
                  }}
                  className="portfolio-img-responsive graphic-design"
                />
                <style jsx>{`
                  @media (min-width: 768px) {
                    .graphic-design {
                      height: 400px !important;
                      width: 400px !important;
                      max-width: 400px !important;
                    }
                  }
                  @media (max-width: 767px) {
                    .portfolio-img-responsive {
                      height: 600px !important;
                      max-width: 100% !important;
                    }
                  }
                `}</style>
                <div className="portfolio-icon">
                  <a
                    href="/static/img/graphic/7.png"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}

        </div>
      </div>
    </section>
  );
};
export default Portfolio;
