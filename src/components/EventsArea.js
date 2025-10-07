"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EventsArea() {
  const [mounted, setMounted] = useState(false);
  const [videoPopup, setVideoPopup] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initialize circular progress bars
    if (typeof window !== "undefined" && mounted) {
      const charts = document.querySelectorAll(".chart");
      charts.forEach((chart) => {
        const percent = chart.getAttribute("data-percent");
        const percentText = chart.querySelector("h2");
        if (percentText && !percentText.textContent.includes("%")) {
          percentText.innerHTML = `${percent}<span>%</span>`;
        }
      });
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <section className="events-area-02 pos-rel pb-100">
        <div className="container-fluid pl-0 pr-0">
          <div className="row no-gutters align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div
                className="events_wrapper events-update pos-rel"
                style={{
                  backgroundImage: "url(/assets/img/added/5.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="events-02 events-03 pos-abl mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".4s"
                >
                  <div className="video-area text-center">
                    <a
                      href="#"
                      className="popup-video"
                      onClick={(e) => {
                        e.preventDefault();
                        setVideoPopup(true);
                      }}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                  <div className="cases events-update-content">
                    <div className="cases__content">
                      <div className="cases-progress mb-25">
                        <p className="funding">
                          Raised <span>$8420</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft animated"
                            data-wow-delay="0.3s"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <h5>95%</h5>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-center">
                        <Link href="/events-details">
                          Urgent Help For Mineral Water For Homeless Peoples
                        </Link>
                      </h3>
                      <p className="text-center">
                        Sed perspiciat unde omnis iste natus error voluptatem
                        accntiume
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="helping-area theme-bg pt-50 pb-50 pl-70 pr-100">
                <div
                  className="section-title white-title text-left mb-50 wow fadeInUp2 animated"
                  data-wow-delay=".4s"
                >
                  <h6>
                    <span>
                      <i className="fas fa-heart"></i>
                    </span>{" "}
                    Get Started With Us
                  </h6>
                  <h2>
                    Helping Today Food
                    <br />
                    For All Hopeless
                  </h2>
                </div>
                <div
                  className="charts d-sm-flex align-items-center mb-40 wow fadeInUp2 animated"
                  data-wow-delay=".5s"
                >
                  <div className="charts__circle mr-30">
                    <div className="chart" data-percent="83">
                      <h2>
                        83<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <div className="charts__content mb-15">
                    <h3>
                      <Link href="#">Medical & Food</Link>
                    </h3>
                    <p>
                      But I must explain to you how all this mis
                      <br />
                      taken idea of denouncing pleasure
                    </p>
                  </div>
                </div>
                <div
                  className="charts d-sm-flex align-items-center mb-40 wow fadeInUp2 animated"
                  data-wow-delay=".6s"
                >
                  <div className="charts__circle mr-30">
                    <div className="chart" data-percent="79">
                      <h2>
                        79<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <div className="charts__content mb-15">
                    <h3>
                      <Link href="#">Child Education</Link>
                    </h3>
                    <p>
                      But I must explain to you how all this mis
                      <br />
                      taken idea of denouncing pleasure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {videoPopup && (
        <div
          className="video-popup-overlay"
          onClick={() => setVideoPopup(false)}
        >
          <div
            className="video-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-popup-close"
              onClick={() => setVideoPopup(false)}
            >
              <i className="fas fa-times"></i>
            </button>

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/St7ny38gLp4?si=bjzGuBH2TXJTQ4LH?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <style jsx>{`
        .video-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .video-popup-content {
          position: relative;
          width: 90%;
          max-width: 900px;
          height: 0;
          padding-bottom: 50.625%; /* 16:9 aspect ratio */
        }

        .video-popup-content iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-popup-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: transparent;
          border: none;
          color: white;
          font-size: 30px;
          cursor: pointer;
          z-index: 10000;
        }

        .video-popup-close:hover {
          color: #ff6b6b;
        }
      `}</style>
    </>
  );
}
