"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CounterArea() {
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState({
    volunteer: 0,
    globalPartner: 0,
    saveChildren: 0,
    refugeShelter: 0,
  });

  useEffect(() => {
    setMounted(true);

    // Animate counters
    const animateCounters = () => {
      const targets = {
        volunteer: 85642,
        globalPartner: 74523,
        saveChildren: 65634,
        refugeShelter: 98563,
      };

      const duration = 2000; // 2 seconds
      const step = 50; // Update every 50ms
      const steps = duration / step;

      Object.keys(targets).forEach((key) => {
        const increment = targets[key] / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= targets[key]) {
            current = targets[key];
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            [key]: Math.floor(current),
          }));
        }, step);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="statistics-area pb-100"></div>;
  }

  return (
    <section
      className="statistics-area pb-100 mt-100"
      suppressHydrationWarning={true}
    >
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div
                  className="counetrs statistics pos-rel mb-30 grey-bg2 text-center wow fadeInUp2 animated"
                  data-wow-delay=".2s"
                >
                  <div className="counetrs__icon mb-20">
                    <i className="flaticon-social-care"></i>
                  </div>
                  <h1>
                    <span className="counter">
                      {counters.volunteer.toLocaleString()}
                    </span>
                  </h1>
                  <p>Volunteer</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div
                  className="counetrs statistics pos-rel mb-30 grey-bg2 text-center wow fadeInUp2 animated"
                  data-wow-delay=".4s"
                >
                  <div className="counetrs__icon mb-20">
                    <i className="flaticon-donation"></i>
                  </div>
                  <h1>
                    <span className="counter">
                      {counters.globalPartner.toLocaleString()}
                    </span>
                  </h1>
                  <p>Global Partner</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div
                  className="counetrs statistics pos-rel mb-30 grey-bg2 text-center wow fadeInUp2 animated"
                  data-wow-delay=".2s"
                >
                  <div className="counetrs__icon mb-20">
                    <i className="flaticon-charity"></i>
                  </div>
                  <h1>
                    <span className="counter">
                      {counters.saveChildren.toLocaleString()}
                    </span>
                  </h1>
                  <p>Save Children</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div
                  className="counetrs statistics pos-rel mb-30 grey-bg2 text-center wow fadeInUp2 animated"
                  data-wow-delay=".4s"
                >
                  <div className="counetrs__icon mb-20">
                    <i className="flaticon-community"></i>
                  </div>
                  <h1>
                    <span className="counter">
                      {counters.refugeShelter.toLocaleString()}
                    </span>
                  </h1>
                  <p>Refuge Shelter</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-12">
            <div className="about-wrapper about-wrap-02 mb-60 pl-40">
              <div
                className="section-title text-left mb-40 wow fadeInUp2 animated"
                data-wow-delay=".1s"
              >
                <h6>
                  <span>
                    <i className="fas fa-heart"></i>
                  </span>{" "}
                  Company Statistics
                </h6>
                <h2>
                  Our Mukul Kumar <span>Foundation</span> Impact
                </h2>
              </div>
              <div
                className="statistics-box d-flex mb-30 wow fadeInUp2 animated"
                data-wow-delay=".2s"
              >
                <div className="statistics-box__icon mr-25">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="statistics-box__text">
                  <h4 className="semi-02-title">Foundation Implementations</h4>
                  <p>
                    Delivering sustainable programs in education, healthcare,
                    clean water, and nutrition to empower underserved
                    communities
                  </p>
                </div>
              </div>
              <div
                className="statistics-box d-flex mb-35 wow fadeInUp2 animated"
                data-wow-delay=".3s"
              >
                <div className="statistics-box__icon mr-25">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="statistics-box__text">
                  <h4 className="semi-02-title">Community Transformation</h4>
                  <p>
                    Creating lasting change through collaborative initiatives
                    that address critical needs and build brighter futures
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                className="theme_btn theme_btn_bg wow fadeInUp2 animated"
                data-wow-delay=".4s"
              >
                Learn more{" "}
                <span>
                  <i className="fas fa-heart"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
