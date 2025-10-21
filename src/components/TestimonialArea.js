"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TestimonialArea() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "David Warner",
      role: "Senior Web Developer",
      image: "/assets/img/testimonial/04.png",
      quote:
        "Make Honest Design Work For Digital Business With Ethical Design Handbook Building Commerce Site With October CMS And Shopaholic",
    },
    {
      id: 2,
      name: "David Luis",
      role: "Senior Web Developer",
      image: "/assets/img/testimonial/05.png",
      quote:
        "Make Honest Design Work For Digital Business With Ethical Design Handbook Building Commerce Site With October CMS And Shopaholic",
    },
    {
      id: 3,
      name: "David Warner",
      role: "Senior Web Developer",
      image: "/assets/img/testimonial/04.png",
      quote:
        "Make Honest Design Work For Digital Business With Ethical Design Handbook Building Commerce Site With October CMS And Shopaholic",
    },
    {
      id: 4,
      name: "David Luis",
      role: "Senior Web Developer",
      image: "/assets/img/testimonial/05.png",
      quote:
        "Make Honest Design Work For Digital Business With Ethical Design Handbook Building Commerce Site With October CMS And Shopaholic",
    },
  ];

  // Group testimonials into slides (2 per slide)
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  useEffect(() => {
    setMounted(true);

    // Auto-advance slides
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!mounted) {
    return (
      <section className="testimonial-area-02 testimonila-area-03 pt-130 pb-180"></section>
    );
  }

  return (
    <section
      className="testimonial-area-02 testimonila-area-03 "
      suppressHydrationWarning={true}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div
              className="section-title text-center mb-90 pl-50 pr-50 wow fadeInUp2 animated"
              data-wow-delay=".1s"
            >
              <h6>
                <span>
                  <i className="fas fa-heart"></i>
                </span>{" "}
                Clients Feedback
              </h6>
              <h2>
                What Our Clients Say About
                <br />
                Our Volunteers
              </h2>
            </div>
          </div>
        </div>
        <div className="testimonial-wrapper-03 position-relative">
          <div
            className="testimonial-slider-wrapper"
            style={{ overflow: "hidden" }}
          >
            <div
              className="testimonial-slides"
              style={{
                display: "flex",
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="testimonial-slide"
                  style={{ minWidth: "100%", flex: "0 0 100%" }}
                >
                  <div
                    className="row testtimonial-item-active testimonial-row-responsive"
                    style={{
                      display: "flex",
                      flexWrap: "nowrap",
                      gap: "20px",
                      justifyContent: "space-between",
                    }}
                  >
                    {slide.map((testimonial, idx) => (
                      <div
                        key={testimonial.id}
                        className="col-xl-6 col-lg-6 col-md-6 col-sm-12 testimonial-item-02 wow fadeInUp2 animated"
                        data-wow-delay=".3s"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flex: "1",
                          minWidth: "0",
                        }}
                      >
                        <div className="testimonial-item__content w-100">
                          <h3>{testimonial.quote}</h3>
                          <div className="author_box d-flex">
                            <div className="author_box__img mr-25">
                              <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                              />
                            </div>
                            <div className="author_box__content">
                              <h4 className="semi-02-title">
                                {testimonial.name}
                              </h4>
                              <p>{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={nextSlide}
            className="testimonial-arrow testimonial-arrow-prev"
            style={{
              position: "absolute",
              left: "-50px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#7d2805",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#7d2805";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#7d2805";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="testimonial-arrow testimonial-arrow-next"
            style={{
              position: "absolute",
              right: "-50px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#7d2805",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#7d2805";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#7d2805";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Dots Navigation */}
          <div
            className="testimonial-dots"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "40px",
            }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  background: index === currentSlide ? "#7d2805" : "#ddd",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (index !== currentSlide) {
                    e.currentTarget.style.background = "#7d2805";
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentSlide) {
                    e.currentTarget.style.background = "#ddd";
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        .testimonial-item-02 {
          display: flex;
          flex: 0 0 50%;
          max-width: 50%;
        }

        .testimonial-item__content {
          width: 100%;
        }

        @media (max-width: 1199px) {
          .testimonial-arrow {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .testimonial-row-responsive {
            flex-wrap: wrap !important;
            gap: 20px !important;
          }

          .testimonial-item-02 {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            margin-bottom: 20px;
          }

          .testimonial-item-02:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
