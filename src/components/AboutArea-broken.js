"use client";
import Link from "next/link";
import { useState, use          <div className="col-xl-6 col-lg-6">
            <div className="about-img mb-50">
              <div 
                className="placeholder-image"
                style={{
                  width: '100%',
                  height: '400px',
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  borderRadius: '10px'
                }}
              >
                About Us Image
              </div>
              <div className="about-experience">
                <h1>5+</h1>
                <h5>Years Of Experience</h5>
              </div>
            </div>
          </div>from "react";

export default function AboutArea() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="about-area"></div>;
  }

  return (
    <div className="about-area pt-150 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="about-wrapper mb-50">
              <div className="section-title">
                <h1>We Are In A Mission To Help The Helpless</h1>
                <p>
                  The Mukul Kumar Memorial Foundation was established with a
                  vision to create meaningful change in the lives of those who
                  need it most. Our comprehensive approach focuses on
                  sustainable development that addresses root causes rather than
                  just symptoms.
                </p>
              </div>
              <div className="about-content">
                <p>
                  Through our dedicated programs in education, healthcare, and
                  community development, we have touched thousands of lives
                  across different regions. Our team of passionate volunteers
                  and professionals work tirelessly to ensure that every
                  donation and effort creates maximum impact.
                </p>
                <ul className="about-list">
                  <li>
                    <i className="far fa-check"></i>
                    Transparent and accountable use of resources
                  </li>
                  <li>
                    <i className="far fa-check"></i>
                    Evidence-based programs with measurable outcomes
                  </li>
                  <li>
                    <i className="far fa-check"></i>
                    Community-driven solutions that empower local leadership
                  </li>
                  <li>
                    <i className="far fa-check"></i>
                    Long-term partnerships for sustainable change
                  </li>
                </ul>
                <div className="about-btn">
                  <Link href="/about" className="theme_btn theme_btn_bg">
                    Learn More{" "}
                    <span>
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-img mb-50">
              <img src="/assets/img/about/1.jpg" alt="About Us" />
              <div className="about-experience">
                <h1>5+</h1>
                <h5>Years Of Experience</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
