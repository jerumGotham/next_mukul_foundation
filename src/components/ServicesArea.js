"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ServicesArea() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="services-area grey-bg2 pb-130">
        <div className="container custom-container-02">
          <div className="services-bg white-bg pos-rel pt-30 pr-30 pl-30">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="services pos-rel mb-30">
                  <div className="services__img">
                    <div className="service-placeholder"></div>
                  </div>
                  <ul className="services__content heding-bg pos-abl">
                    <li>
                      <h4 className="semi-02-title">
                        <Link href="">Charity For Food</Link>
                      </h4>
                      <p>Giving money to food</p>
                    </li>
                    <li>
                      <Link className="more_btn" href="">
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </li>
                  </ul>
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
      className="services-area grey-bg2 pb-130"
      suppressHydrationWarning={true}
    >
      <div className="container custom-container-02">
        <div className="services-bg white-bg pos-rel pt-30 pr-30 pl-30">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated"
              data-wow-delay=".3s"
            >
              <div className="services pos-rel mb-30">
                <div className="services__img">
                  <Image
                    src="/assets/img/services/01.jpg"
                    alt="Charity For Food"
                    width={350}
                    height={250}
                    className="w-100"
                  />
                </div>
                <ul className="services__content heding-bg pos-abl">
                  <li>
                    <h4 className="semi-02-title">
                      <Link href="">Charity For Food</Link>
                    </h4>
                    <p>Giving money to food</p>
                  </li>
                  <li>
                    <Link className="more_btn" href="">
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated"
              data-wow-delay=".5s"
            >
              <div className="services pos-rel mb-30">
                <div className="services__img">
                  <Image
                    src="/assets/img/services/02.jpg"
                    alt="Children Support"
                    width={350}
                    height={250}
                    className="w-100"
                  />
                </div>
                <ul className="services__content heding-bg pos-abl">
                  <li>
                    <h4 className="semi-02-title">
                      <Link href="">Children Support</Link>
                    </h4>
                    <p>Giving money to food</p>
                  </li>
                  <li>
                    <Link className="more_btn" href="">
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated"
              data-wow-delay=".7s"
            >
              <div className="services pos-rel mb-30">
                <div className="services__img">
                  <Image
                    src="/assets/img/services/03.jpg"
                    alt="Refuge Shelter"
                    width={350}
                    height={250}
                    className="w-100"
                  />
                </div>
                <ul className="services__content heding-bg pos-abl">
                  <li>
                    <h4 className="semi-02-title">
                      <Link href="">Refuge Shelter</Link>
                    </h4>
                    <p>Giving money to food</p>
                  </li>
                  <li>
                    <Link className="more_btn" href="">
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
