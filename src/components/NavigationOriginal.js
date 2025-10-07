"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header id="top-menu">
        <div className="main-header-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="logo-container">
                  <Link href="/" className="d-inline-block">
                    MUKUL KUMAR
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header id="top-menu">
        <div className="main-header-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div
                className="col-xl-2 col-lg-2 col-md-6 col-6"
                style={{
                  maxWidth: "clamp(922px, 90.38vw, 1720px)",
                  width: "100%",
                }}
              >
                <div className="logo-container">
                  <Link href="/" className="d-inline-block w-8 h-8">
                    MUKUL KUMAR
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 d-none d-lg-block text-lg-center text-xl-right">
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul>
                      <li>
                        <Link className="active" href="/">
                          Home <i className="far fa-chevron-down"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/mission">
                          Mission <i className="far fa-chevron-down"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/mission">Our Mission</Link>
                          </li>
                          <li>
                            <Link href="/about">Our Vision</Link>
                          </li>
                          <li>
                            <Link href="/about">Our Values</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-6 text-right">
                <div className="hamburger-menu d-md-block d-lg-none">
                  <a
                    href="javascript:void(0);"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <i className="far fa-bars"></i>
                  </a>
                </div>
                <div className="quote-btn d-none d-lg-block">
                  <Link href="/donation" className="theme_btn theme_btn_bg">
                    donate Now{" "}
                    <span>
                      <i className="fas fa-heart"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* slide-bar start */}
      <aside className={`slide-bar ${isMenuOpen ? "slide-bar-active" : ""}`}>
        <div className="close-mobile-menu">
          <a href="javascript:void(0);" onClick={() => setIsMenuOpen(false)}>
            <i className="fas fa-times"></i>
          </a>
        </div>

        {/* offset-sidebar start */}
        <div className="offset-sidebar">
          <div className="offset-widget offset-logo mb-30">
            <Link href="/">
              <Image src="/assets/img/logo/header_logo_one.png" alt="logo" />
            </Link>
          </div>
          <div className="offset-widget mb-40">
            <div className="info-widget">
              <h4 className="offset-title mb-20">About Us</h4>
              <p className="mb-30">
                The Mukul Kumar Memorial Foundation is dedicated to creating
                positive change and empowering communities through education,
                healthcare, and sustainable development.
              </p>
              <Link className="theme_btn theme_btn_bg" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="offset-widget mb-30 pr-10">
            <div className="info-widget info-widget2">
              <h4 className="offset-title mb-20">Contact Info</h4>
              <p>
                <i className="fal fa-address-book"></i> 23/A, Miranda City
                Likaoli Prikano, Dope
              </p>
              <p>
                <i className="fal fa-phone"></i> +0989 7876 9865 9
              </p>
              <p>
                <i className="fal fa-envelope-open"></i>
                <a href="mailto:info@mukulkumarfoundation.org">
                  info@mukulkumarfoundation.org
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* offset-sidebar end */}
      </aside>

      <div
        className={`body-overlay ${isMenuOpen ? "body-overlay-active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      {/* slide-bar end */}
    </>
  );
}
