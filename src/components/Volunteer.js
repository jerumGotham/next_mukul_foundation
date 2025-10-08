"use client";
import Image from "next/image";
import { useState } from "react";

export default function Volunteer() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      id: 0,
      title: "Recognition and Fulfillment",
      content:
        "Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.",
    },
    {
      id: 1,
      title: "Why Join Us as a Volunteer?",
      content:
        "Join our volunteer program and make a real difference in the community. We provide comprehensive training, flexible schedules, and opportunities to develop new skills while helping those in need.",
    },
    {
      id: 2,
      title: "Be Part of a Community",
      content:
        "Become part of a passionate community of volunteers dedicated to making positive change. Connect with like-minded individuals, build lasting friendships, and create meaningful impact together.",
    },
  ];

  return (
    <section
      className="volunteer-area pt-80 pb-10"
      suppressHydrationWarning={true}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-xl-6 col-lg-6">
            <div
              className="volunteer-img mb-30 wow fadeInLeft"
              data-wow-delay=".3s"
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src="/assets/img/added/5.jpg"
                alt="Volunteer Team"
                width={600}
                height={700}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Right Side - Content with Accordion */}
          <div className="col-xl-6 col-lg-6">
            <div className="volunteer-content pl-50">
              <div
                className="section-title mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h6>
                  <span>
                    <i className="fas fa-heart"></i>
                  </span>{" "}
                  Join us
                </h6>
                <h2>Why We Need You Become a Volunteer</h2>
              </div>

              <div
                className="volunteer-text mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <p>
                  We help companies develop powerful corporate social
                  responsibility, grantmaking, and employee engagement
                  strategies.
                </p>
              </div>

              {/* Accordion */}
              <div className="volunteer-accordion">
                {accordionItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`accordion-item mb-20 wow fadeInUp`}
                    data-wow-delay={`.${5 + index}s`}
                    style={{
                      border: "1px solid #e5e5e5",
                      borderRadius: "8px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <button
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                      style={{
                        width: "100%",
                        padding: "20px 25px",
                        background: activeAccordion === index ? "#fff" : "#fff",
                        border: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        fontSize: "18px",
                        fontWeight: "600",
                        color:
                          activeAccordion === index ? "#ff6b6b" : "#1a1a1a",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span>{item.title}</span>
                      <i
                        className={`fas fa-chevron-${
                          activeAccordion === index ? "up" : "down"
                        }`}
                        style={{
                          color: "#ff6b6b",
                          fontSize: "14px",
                          transition: "transform 0.3s ease",
                        }}
                      ></i>
                    </button>

                    <div
                      className="accordion-content"
                      style={{
                        maxHeight: activeAccordion === index ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                        background: "#fff",
                      }}
                    >
                      <div
                        style={{
                          padding: "0 25px 20px 25px",
                          color: "#666",
                          lineHeight: "1.8",
                        }}
                      >
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
