"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutArea2() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="about-area grey-bg2 pos-rel pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="about-img mb-60 pos-rel">
                <div className="about-img__thumb pr-45">
                  <div className="about-placeholder">Loading...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="about-area-03 pos-rel pt-100 pb-180">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about-img-02 about-img-03 mb-40 mr-70 pos-rel">
              <div
                className="about-img-03__thumb wow fadeInUp2 animated"
                data-wow-delay=".1s"
              >
                <Image
                  src="/assets/img/about/about.jpg"
                  alt="About"
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div
                className="about-img-03__thumb-03 wow fadeInUp2 animated"
                data-wow-delay=".2s"
              >
                <Image
                  src="/assets/img/added/4.jpg"
                  alt="About"
                  width={300}
                  height={300}
                  style={{ borderRadius: "20%" }}
                />
              </div>
              <div
                className="experience-box wow fadeInUp2 animated"
                data-wow-delay=".4s"
              >
                <h1 className="f-left">25</h1>
                <h4 className="semi-02-title">
                  Years
                  <br />
                  Experience
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about-wrapper mb-40">
              <div
                className="section-title text-left mb-20 wow fadeInUp2 animated"
                data-wow-delay=".1s"
              >
                <h6>
                  <span>
                    <i className="fas fa-heart"></i>
                  </span>{" "}
                  About EnaCare
                </h6>
                <h2>Challenge 264 Million Children Go to Schools</h2>
              </div>
              <p>
                The Mukul Kumar Memorial Foundation is dedicated to creating
                positive change and empowering communities through education,
                healthcare, and sustainable development initiatives. Our mission
                is to honor the legacy of Mukul Kumar by providing opportunities
                and support to those who need it most, ensuring that every
                individual has access to quality education and essential
                resources for a better future
              </p>
              <ul
                className="about_list mt-30 mb-20 wow fadeInUp2 animated"
                data-wow-delay=".2s"
              >
                <li>
                  We believe in transparent and accountable use of resources to
                  maximize impact and create lasting change in the communities
                  we serve through education and development programs.
                </li>
                <li>
                  Our foundation works with dedicated volunteers and partners to
                  implement sustainable solutions that address root causes and
                  empower individuals to build better lives for themselves and
                  their families.
                </li>
              </ul>
              <Link className="theme_btn theme_btn_bg" href="/about">
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
