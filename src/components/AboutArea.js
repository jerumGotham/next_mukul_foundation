"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutArea() {
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
    <section
      className="about-area grey-bg2 pos-rel pb-100"
      suppressHydrationWarning={true}
    >
      <div className="right-shape">
        <Image
          src="/assets/img/shape/01.png"
          alt="Shape decoration"
          width={300}
          height={300}
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about-img mb-60 pos-rel">
              <div
                className="about-img__thumb pr-45 wow fadeInUp2 animated"
                data-wow-delay=".1s"
              >
                <Image
                  src="/assets/img/added/9.jpg"
                  alt="About Us"
                  width={500}
                  height={600}
                  className="w-100"
                />
              </div>
              <div
                className="experience-box heding-bg wow fadeInUp2 animated"
                data-wow-delay=".3s"
              >
                <h1>24</h1>
                <h6 className="semi-02-title">Years Since 9/11 Attacks</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about-wrapper mb-30">
              <div
                className="section-title text-left mb-20 wow fadeInUp2 animated"
                data-wow-delay=".1s"
              >
                <h6>
                  <span>
                    <i className="fas fa-heart"></i>
                  </span>{" "}
                  About US
                </h6>
                <h2>Honoring Compassion, Service, and Religious Harmony</h2>
              </div>
              <p>
                The Mukul Kumar Agarwala Memorial Scholarship honors the life of
                Mukul Kumar Agarwala, whose compassion, humility, and selfless
                service inspired all who knew him. Mukul overcame adversity and
                discrimination with quiet strength, using his education and
                success to uplift others—especially the marginalized and
                voiceless. He dedicated his life to helping those in need,
                supporting humanitarian causes, and promoting religious harmony
                and understanding.
              </p>
              <ul
                className="about_list mt-30 mb-20 wow fadeInUp2 animated"
                data-wow-delay=".2s"
              >
                <li>
                  This scholarship recognizes students who embody Mukul’s
                  values: compassion, forgiveness, tolerance, and respect for
                  all faiths.
                </li>
                <li>
                  We invite applicants who have shown resilience in the face of
                  hardship, who strive to serve others, and who seek to build
                  bridges across divisions. Our foundation continues Mukul’s
                  legacy by supporting those who make the world gentler, more
                  just, and united in spirit.
                </li>
              </ul>
              <Link className="theme_btn theme_btn_bg" href="">
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
