"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const slideBarRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // Prevent jQuery from interfering with our React components
    const preventJQueryInterference = () => {
      if (typeof window !== "undefined" && window.jQuery) {
        // Disable jQuery meanmenu on our navigation
        window
          .jQuery(
            ".hamburger-menu, .close-mobile-menu, .slide-bar, .body-overlay"
          )
          .off();
      }
    };

    preventJQueryInterference();

    // Clean up when component unmounts
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, []);

  useEffect(() => {
    // Handle body scroll when menu is open/closed
    if (mounted) {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  }, [isMenuOpen, mounted]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  if (!mounted) {
    return (
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
                  <Link href="/" className="d-inline-block">
                    MUKUL KAMAR
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
      <header id="top-menu" suppressHydrationWarning={true}>
        <div className="main-header-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-6 d-flex"
                style={{
                  maxWidth: "clamp(922px, 90.38vw, 1720px)",
                  width: "100%",
                }}
              >
                <div className="logo-container d-flex gap-5">
                  <div className="d-inline-block font-weight-bold text-[#b7860f]">
                    MUKUL KUMAR MEMORAL FOUNDATION
                  </div>
                </div>
              </div>

              <div className="col-xl-5 col-lg-5 d-none d-lg-block text-lg-center text-xl-right">
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul>
                      <li>
                        <Link className="active" href="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          About Us <i className="far fa-chevron-down"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/case-study-1">Mission</Link>
                          </li>
                          <li>
                            <Link href="/case-study-2">Vision</Link>
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
                  <button
                    type="button"
                    onClick={handleMenuToggle}
                    style={{
                      background: "none",
                      border: "none",
                      color: "inherit",
                      cursor: "pointer",
                      padding: "0",
                    }}
                  >
                    <i className="far fa-bars"></i>
                  </button>
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
      {mounted && (
        <aside
          className={`slide-bar ${isMenuOpen ? "slide-bar-active" : ""}`}
          suppressHydrationWarning={true}
        >
          <div className="close-mobile-menu">
            <button
              type="button"
              onClick={handleMenuClose}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                padding: "0",
              }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* offset-sidebar start */}
          <div className="offset-sidebar">
            <div className="offset-widget offset-logo mb-30">
              <Link href="/">MUKUL KAMAR FOUNDATION</Link>
            </div>
            <div className="offset-widget mb-40">
              <div className="info-widget">
                <h4 className="offset-title mb-20">About Us</h4>
                <p className="mb-30">
                  The Mukul Kumar Memorial Foundation is dedicated to creating
                  positive change and empowering communities through education,
                  healthcare, and sustainable development initiatives.
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
      )}

      {mounted && (
        <div
          className={`body-overlay ${isMenuOpen ? "body-overlay-active" : ""}`}
          onClick={handleMenuClose}
          suppressHydrationWarning={true}
        ></div>
      )}
      {/* slide-bar end */}
    </>
  );
}
