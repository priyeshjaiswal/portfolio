import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
import Link from "next/link";
import Image from 'next/image';

const socialLinks = {
  instagram: "https://www.instagram.com/priyeshjaiswal_/",
  linkedin: "https://www.linkedin.com/in/priyesh-jaiswal/",
  // pinterest: "https://pinterest.com"
};

const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, [blog]);

  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link className="logo-text" href="/">
              Sergio
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${sideBarToggle ? "menu-open menu-open-desk" : ""
          }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <Image src="/static/img/about-me.jpg" alt="Profile" width={100} height={90} />
              </div>
              <h5>Priyesh</h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
        </div>
        <div className="nav justify-content-center social-icons">
          {Object.entries(socialLinks).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
            >
              <i className={`fab fa-${platform}${platform === 'linkedin' ? '-in' : ''}`} />
            </a>
          ))}
        </div>
      </header>
    </Fragment>
  );
};

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About Me</span>
        </a>
      </li>
      <li data-menuanchor="services">
        <a className="nav-link" href="#services">
          <i className="ti-panel" />
          <span>Services</span>
        </a>
      </li>
      <li data-menuanchor="work">
        <a className="nav-link" href="#work">
          <i className="ti-bookmark-alt" />
          <span>Portfolio</span>
        </a>
      </li>
      {/* <li data-menuanchor="blog" className="blog">
        <a className="nav-link" href="#blog">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Blogs</span>
        </a>
      </li> */}
      <li data-menuanchor="contactus">
        <a className="nav-link" href="#contactus">
          <i className="ti-map-alt" />
          <span>Contact Me</span>
        </a>
      </li>
    </ul>
  );
};

const MenuWithBlog = () => {
  useEffect(() => {
    const handleScroll = () => document.querySelector(".blog")?.classList.add("active");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link className="nav-link" href="/#home">
            <i className="ti-home" />
            <span>Home</span>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link className="nav-link" href="/#about">
            <i className="ti-id-badge" />
            <span>About Me</span>
          </Link>
        </li>
        <li data-menuanchor="services">
          <Link className="nav-link" href="/#services">
            <i className="ti-panel" />
            <span>Services</span>
          </Link>
        </li>
        <li data-menuanchor="work">
          <Link className="nav-link" href="/#work">
            <i className="ti-bookmark-alt" />
            <span>Portfolio</span>
          </Link>
        </li>
        {/* <li data-menuanchor="blog" className="blog active">
          <Link className="nav-link" href="/#blog">
            <i className="ti-layout-media-overlay-alt-2" />
            <span>Blogs</span>
          </Link>
        </li> */}
        <li data-menuanchor="contactus">
          <Link className="nav-link" href="/#contactus">
            <i className="ti-map-alt" />
            <span>Contact Me</span>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Header;
