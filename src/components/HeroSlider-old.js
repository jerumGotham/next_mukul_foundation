"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="slider-activation"></div>;
  }

  return (
    <div className="slider-activation">
      <div className="slider-area slider-area2 position-relative">
        <div className="slider-height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9 col-md-10">
                <div className="hero-wrapper">
                  <div className="hero-text">
                    <div className="hero-slider-caption">
                      <h5>Help The Poor</h5>
                      <h1 className="slide-title">
                        We Can Change The <br />
                        <span className="b-text">World Together</span>
                      </h1>
                      <div className="hero-btn">
                        <Link
                          href="/donation"
                          className="theme_btn theme_btn_bg mr-20"
                        >
                          Donate Now{" "}
                          <span>
                            <i className="fas fa-heart"></i>
                          </span>
                        </Link>
                        <Link href="/about" className="theme_btn">
                          Learn More{" "}
                          <span>
                            <i className="fas fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-3 col-md-2"></div>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <div className="hero-placeholder">Hero Image</div>
        </div>
      </div>
    </div>
  );
}
