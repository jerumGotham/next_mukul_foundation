"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Brand() {
  const [mounted, setMounted] = useState(false);

  const brands = [
    { id: 1, img: "/assets/img/brand/01.png" },
    { id: 2, img: "/assets/img/brand/02.png" },
    { id: 3, img: "/assets/img/brand/03.png" },
    { id: 4, img: "/assets/img/brand/04.png" },
    { id: 5, img: "/assets/img/brand/05.png" },
  ];

  // Duplicate brands for seamless loop
  const allBrands = [...brands, ...brands];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="brand-area">
        <div className="container custom-container-03">
          <div className="pb-60"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="brand-area" suppressHydrationWarning={true}>
      <div className="container custom-container-03">
        <div className="brand-slider-wrapper pb-60">
          <div className="brand-slider">
            <div className="brand-track">
              {allBrands.map((brand, index) => (
                <div key={`${brand.id}-${index}`} className="brand-slide">
                  <div className="brand-img">
                    <a href="#">
                      <Image
                        src={brand.img}
                        alt={`Brand ${brand.id}`}
                        width={150}
                        height={80}
                        style={{
                          width: "auto",
                          height: "auto",
                          maxWidth: "150px",
                          opacity: 0.7,
                          transition: "opacity 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "0.7")
                        }
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brand-area {
          overflow: hidden;
        }

        .brand-slider-wrapper {
          overflow: hidden;
          position: relative;
        }

        .brand-slider {
          width: 100%;
        }

        .brand-track {
          display: flex;
          animation: scroll 20s linear infinite;
          width: max-content;
        }

        .brand-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .brand-slide {
          flex: 0 0 auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 120px;
        }

        .brand-img {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-img a {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .brand-img a:hover {
          transform: scale(1.1);
        }

        @media (max-width: 767px) {
          .brand-slide {
            padding: 15px 30px;
            min-height: 100px;
          }

          .brand-track {
            animation: scroll 15s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
