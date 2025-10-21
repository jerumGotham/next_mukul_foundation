"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-area" style={{ background: "#f5f5f5" }}>
      <div className="container">
        <div className="row pt-80 pb-60">
          {/* Logo and Info Section */}
          <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
            <div className="footer-widget">
              <div className="footer-logo mb-30">
                <h3>MUKUL KUMAR</h3>
              </div>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                }}
              >
                Thank you for visiting the official website of the Mukul Kumar
                Memorial Foundation. Your support helps us continue our mission
                to make a positive impact in our community and beyond.
              </p>
              <div className="footer-total-raised">
                <h4
                  style={{
                    color: "#061738",
                    fontSize: "22px",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  Total Raised:
                </h4>
                <h2
                  style={{
                    color: "#7d2805",
                    fontSize: "48px",
                    fontWeight: "700",
                  }}
                >
                  $8,965
                </h2>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
            <div className="footer-widget">
              <h3
                className="footer-title"
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBottom: "30px",
                  color: "#061738",
                  position: "relative",
                  paddingBottom: "15px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "3px",
                    background: "#7d2805",
                    marginRight: "15px",
                    verticalAlign: "middle",
                  }}
                ></span>
                Gallery
              </h3>
              <div className="footer-gallery">
                <div className="row g-2">
                  <div className="col-4">
                    <Image
                      src="/assets/img/added/1.jpg"
                      alt="Gallery 1"
                      width={120}
                      height={120}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="col-4">
                    <Image
                      src="/assets/img/added/2.jpg"
                      alt="Gallery 2"
                      width={120}
                      height={120}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="col-4">
                    <Image
                      src="/assets/img/added/3.jpg"
                      alt="Gallery 3"
                      width={120}
                      height={120}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="col-4">
                    <Image
                      src="/assets/img/added/twintower_a.jpg"
                      alt="Gallery 4"
                      width={120}
                      height={120}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="col-4">
                    <Image
                      src="/assets/img/added/3.jpg"
                      alt="Gallery 5"
                      width={120}
                      height={120}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="col-4">
                    <Image
                      src="/assets/img/added/twintower_b.jpg"
                      alt="Gallery 6"
                      width={120}
                      height={120}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
            <div className="footer-widget">
              <h3
                className="footer-title"
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBottom: "30px",
                  color: "#061738",
                  position: "relative",
                  paddingBottom: "15px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "60px",
                    height: "3px",
                    background: "#7d2805",
                    marginRight: "15px",
                    verticalAlign: "middle",
                  }}
                ></span>
                Quick Links
              </h3>
              <div className="row">
                <div className="col-6">
                  <ul
                    className="footer-links"
                    style={{ listStyle: "none", padding: 0 }}
                  >
                    <li style={{ marginBottom: "12px" }}>
                      <Link
                        href="/about"
                        style={{
                          color: "#666",
                          fontSize: "16px",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#7d2805")}
                        onMouseLeave={(e) => (e.target.style.color = "#666")}
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul
                    className="footer-links"
                    style={{ listStyle: "none", padding: 0 }}
                  >
                    <li style={{ marginBottom: "12px" }}>
                      <Link
                        href="/volunteer"
                        style={{
                          color: "#666",
                          fontSize: "16px",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#7d2805")}
                        onMouseLeave={(e) => (e.target.style.color = "#666")}
                      >
                        Become Volunteer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          style={{
            position: "fixed",
            bottom: "40px",
            right: "5%",
            transform: "translateX(50%)",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#7d2805",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#061738";
            e.currentTarget.style.transform = "translateX(50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#061738";
            e.currentTarget.style.transform = "translateX(50%) scale(1)";
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      {/* Wave Pattern and Copyright */}
      <div
        className="footer-bottom"
        style={{
          background: "#061738",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Wave Pattern */}
        <div
          className="wave-pattern"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
          }}
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row">
            <div className="col-12">
              <div
                className="copyright-text text-center"
                style={{
                  padding: "30px 0",
                  color: "#999",
                  fontSize: "16px",
                }}
              >
                <p>
                  © 2025{" "}
                  <span style={{ color: "#7d2805", fontWeight: "600" }}>
                    Mukul Kumar Memorial Foundation
                  </span>
                  . Made with{" "}
                  <i
                    className="fas fa-heart"
                    style={{ color: "#7d2805", margin: "0 5px" }}
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
