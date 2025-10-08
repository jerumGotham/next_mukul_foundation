"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FeaturesArea() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: "flaticon-donation-1",
      title: "Food & Nutrition",
      description:
        "Providing nutritious meals and food security programs to communities and families in need.",
      link: "/about",
      delay: ".1s",
      active: true,
    },
    {
      icon: "flaticon-blood-donation",
      title: "Healthcare ",
      description:
        "Offering medical assistance and access to essential services for underserved populations.",
      link: "/about",
      delay: ".3s",
      active: false,
    },
    {
      icon: "flaticon-donation",
      title: "Clean Water",
      description:
        "Ensuring access to safe drinking water and sanitation facilities in rural and remote areas.",
      link: "/about",
      delay: ".5s",
      active: false,
    },
    {
      icon: "flaticon-scholarship",
      title: "Education",
      description:
        "Empowering children and youth through quality education, and skill development initiatives.",
      link: "/about",
      delay: ".7s",
      active: false,
    },
  ];

  if (!mounted) {
    return (
      <section className="feature-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-xl-3 col-lg-6 col-md-6">
                <div className="features features-02 mb-30">
                  <div className="features__icon mb-25">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="features__content">
                    <h3>
                      <Link href={feature.link}>{feature.title}</Link>
                    </h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="feature-area pt-130 pb-100"
      suppressHydrationWarning={true}
    >
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-xl-3 col-lg-6 col-md-6">
              <div
                className={`features features-02 ${
                  feature.active ? "active" : ""
                } pos-rel mb-30 wow fadeInUp2 animated`}
                data-wow-delay={feature.delay}
              >
                <div
                  className="features-02__back"
                  style={{
                    backgroundImage: "url(/assets/img/shape/11.png)",
                  }}
                ></div>
                <div className="features__icon mb-25">
                  <i className={feature.icon}></i>
                </div>
                <div className="features__content">
                  <h3>
                    <Link href={feature.link}>{feature.title}</Link>
                  </h3>
                  <p>{feature.description}</p>
                  <Link className="more_btn2" href={feature.link}>
                    read more <i className="far fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
