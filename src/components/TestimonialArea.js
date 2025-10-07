"use client";
import { useState, useEffect } from "react";

export default function TestimonialArea() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Community Leader",
      image: "/assets/img/testimonial/testimonial1.jpg",
      quote:
        "The Mukul Kumar Memorial Foundation has transformed our community. Their education programs have given our children hope and a brighter future. The dedication and transparency of their team is truly remarkable.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Healthcare Worker",
      image: "/assets/img/testimonial/testimonial2.jpg",
      quote:
        "Working with this foundation has been incredibly rewarding. Their healthcare initiatives have reached so many families in need, providing essential medical care and health education that saves lives every day.",
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      role: "Education Advocate",
      image: "/assets/img/testimonial/testimonial3.jpg",
      quote:
        "What sets this foundation apart is their commitment to sustainable change. They don't just provide temporary solutions - they empower communities to build better futures for themselves.",
    },
  ];

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (!mounted) {
    return <div className="testimonial-area"></div>;
  }

  return (
    <div className="testimonial-area gray-bg pt-150 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="section-title text-center mb-75">
              <div className="section-title-icon">
                <i className="flaticon-quote"></i>
              </div>
              <h1>What People Say</h1>
              <p>
                Hear from the communities we serve and the partners who work
                with us to create lasting change around the world.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="testimonial-wrapper">
              <div className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`testimonial-item ${
                      index === currentSlide ? "active" : ""
                    }`}
                  >
                    <div className="testimonial-content text-center">
                      <div className="testimonial-img mb-30">
                        <div className="testimonial-avatar">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                      <div className="testimonial-text">
                        <p>&quot;{testimonial.quote}&quot;</p>
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation dots */}
              <div className="testimonial-nav">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
