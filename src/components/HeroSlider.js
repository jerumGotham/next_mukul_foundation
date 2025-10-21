"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    setMounted(true);

    // Initialize Slick Carousel when component mounts (matching your main.js)
    const initializeSlider = () => {
      if (
        typeof window !== "undefined" &&
        window.jQuery &&
        window.jQuery.fn.slick &&
        !isInitialized.current
      ) {
        const BasicSlider = window.jQuery(".slider-active");

        // Check if slider exists and is not already initialized
        if (BasicSlider.length && !BasicSlider.hasClass("slick-initialized")) {
          // Animation function from your main.js
          function doAnimations(elements) {
            const animationEndEvents =
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            elements.each(function () {
              const $this = window.jQuery(this);
              const $animationDelay = $this.data("delay");
              const $animationType = "animated " + $this.data("animation");
              $this.css({
                "animation-delay": $animationDelay,
                "-webkit-animation-delay": $animationDelay,
              });
              $this
                .addClass($animationType)
                .one(animationEndEvents, function () {
                  $this.removeClass($animationType);
                });
            });
          }

          // Initialize with exact settings from your main.js
          BasicSlider.on("init", function (e, slick) {
            const $firstAnimatingElements = window
              .jQuery(".single-slider:first-child")
              .find("[data-animation]");
            doAnimations($firstAnimatingElements);
          });

          BasicSlider.on(
            "beforeChange",
            function (e, slick, currentSlide, nextSlide) {
              const $animatingElements = window
                .jQuery('.single-slider[data-slick-index="' + nextSlide + '"]')
                .find("[data-animation]");
              doAnimations($animatingElements);
            }
          );

          try {
            BasicSlider.slick({
              autoplay: true,
              autoplaySpeed: 3000,
              dots: false,
              fade: true,
              speed: 1000,
              arrows: true,
              cssEase: "linear",
              prevArrow:
                '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
              nextArrow:
                '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
              responsive: [
                { breakpoint: 1250, settings: { dots: false, arrows: false } },
                { breakpoint: 850, settings: { dots: false, arrows: false } },
              ],
            });

            isInitialized.current = true;
          } catch (error) {
            console.warn("Slick slider initialization failed:", error);
          }
        }
      }
    };

    // Delay initialization to ensure jQuery and Slick are loaded
    const timer = setTimeout(initializeSlider, 1000);

    return () => {
      clearTimeout(timer);
      // Clean up slick when component unmounts - but only if it was initialized
      if (
        typeof window !== "undefined" &&
        window.jQuery &&
        window.jQuery.fn.slick &&
        isInitialized.current
      ) {
        try {
          const BasicSlider = window.jQuery(".slider-active");
          if (BasicSlider.length && BasicSlider.hasClass("slick-initialized")) {
            BasicSlider.slick("unslick");
          }
        } catch (error) {
          console.warn("Slick slider cleanup failed:", error);
        }
      }
      isInitialized.current = false;
    };
  }, []);

  if (!mounted) {
    return (
      <div className="slider-area pos-rel">
        <div className="slider-active">
          <div className="single-slider slider-height pos-rel d-flex align-items-center slider-placeholder">
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <div className="slider__content text-left">
                    <h5 className="sub-title mb-25">
                      <span className="pr-10">
                        <i className="fas fa-heart"></i>
                      </span>
                      Raising Your Helping Hands
                    </h5>
                    <h1 className="main-title mb-35">
                      Mukul&apos;s name, a lasting flame
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="slider-area pos-rel" suppressHydrationWarning={true}>
      <div className="slider-active" ref={sliderRef}>
        {/* Slide 1 */}
        <div
          className="single-slider slider-height pos-rel d-flex align-items-center"
          style={{
            background: "#000", // fallback background
            padding: 0,
            margin: 0,
            minHeight: "600px", // or your preferred minimum height
            height: "100%",
          }}
        >
          <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
            <div className="row" style={{ margin: 0 }}>
              <div className="col-12" style={{ padding: 0 }}>
                {/* Responsive Video Embed */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "70vh", // or "100vh" for full viewport, or adjust as needed
                    minHeight: "400px",
                  }}
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://www.youtube.com/embed/lIp7z5VraG4?autoplay=1&mute=1&si=KRNZvonU8tPkjYrr"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  {/* <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&controls=1&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=VIDEO_ID"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="9/11 Tribute"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        {/* <div
          className="single-slider slider-height pos-rel d-flex align-items-center"
          style={{ backgroundImage: "url(assets/img/added/twintower_d.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <div className="slider__content text-left">
                  <h5
                    className="sub-title mb-25"
                    data-animation="fadeInUp2"
                    data-delay=".1s"
                  >
                    <span className="pr-10">
                      <i className="fas fa-heart"></i>
                    </span>
                    Raising Your Helping Hands
                  </h5>
                  <h1
                    className="main-title mb-35"
                    data-animation="fadeInUp2"
                    data-delay=".2s"
                  >
                    Mukul&apos;s name, a lasting flame
                  </h1>
                  <ul
                    className="btn-list"
                    data-animation="fadeInUp2"
                    data-delay=".3s"
                  >
                    <li>
                      <Link href="" className="theme_btn theme_btn_bg">
                        Learn more{" "}
                        <span>
                          <i className="fas fa-heart"></i>
                        </span>
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Slide 3 */}
        {/* <div
          className="single-slider slider-height pos-rel d-flex align-items-center"
          style={{ backgroundImage: "url(assets/img/added/2.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <div className="slider__content text-left">
                  <h5
                    className="sub-title mb-25"
                    data-animation="fadeInUp2"
                    data-delay=".1s"
                  >
                    <span className="pr-10">
                      <i className="fas fa-heart"></i>
                    </span>
                    Raising Your Helping Hands
                  </h5>
                  <h1
                    className="main-title mb-35"
                    data-animation="fadeInUp2"
                    data-delay=".2s"
                  >
                    Mukul&apos;s name, a lasting flame
                  </h1>
                  <ul
                    className="btn-list"
                    data-animation="fadeInUp2"
                    data-delay=".3s"
                  >
                    <li>
                      <Link href="" className="theme_btn theme_btn_bg">
                        Learn more{" "}
                        <span>
                          <i className="fas fa-heart"></i>
                        </span>
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
