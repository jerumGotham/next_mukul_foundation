"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CTAArea() {
  const [mounted, setMounted] = useState(false);
  const [donationAmount, setDonationAmount] = useState("500");
  const [selectedFund, setSelectedFund] = useState("Select Fund");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
  };

  const incrementAmount = () => {
    setDonationAmount((prev) => String(Number(prev) + 10));
  };

  const decrementAmount = () => {
    setDonationAmount((prev) => String(Math.max(0, Number(prev) - 10)));
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="donation-area-03 grey-bg2 pos-rel pt-100 pb-75">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 col-md-6">
            <div
              className="doante-select-area donate-select-02 mb-30 mr-50 text-center white-bg wow fadeInUp2 animated"
              data-wow-delay=".3s"
            >
              <div
                className="section-title text-center mb-40 wow fadeInUp2 animated"
                data-wow-delay=".1s"
              >
                <h2>Donate Us</h2>
                <p>
                  Sed perspiciatis unde omnis iste natus errvolu ptatem accntium
                  doloremque laudantiu aperiam
                </p>
              </div>
              <div className="select-area mb-10">
                <select
                  name="fund"
                  id="fund"
                  value={selectedFund}
                  onChange={(e) => setSelectedFund(e.target.value)}
                >
                  <option value="Select Fund">Select Fund</option>
                  <option value="Poor Fund">Poor Fund</option>
                  <option value="Refugee Fund">Refugee Fund</option>
                  <option value="Education Fund">Education Fund</option>
                  <option value="Water Fund">Water Fund</option>
                </select>
              </div>
              <div className="donate-cart pos-rel mb-10">
                <form
                  className="donate-btn pos-rel"
                  action="#"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    value={`$${donationAmount}`}
                    onChange={(e) =>
                      setDonationAmount(e.target.value.replace("$", ""))
                    }
                  />
                </form>
                <div className="plus-minus">
                  <div className="cart inc" onClick={decrementAmount}>
                    <i className="far fa-chevron-left"></i>
                  </div>
                  <div className="cart dec" onClick={incrementAmount}>
                    <i className="far fa-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div className="input-donate mb-10">
                <button
                  className="cont_btn"
                  onClick={() => handleAmountClick("15")}
                >
                  $15
                </button>
                <button
                  className="cont_btn"
                  onClick={() => handleAmountClick("50")}
                >
                  $50
                </button>
                <button
                  className="cont_btn"
                  onClick={() => handleAmountClick("100")}
                >
                  $100
                </button>
                <button
                  className="cont_btn"
                  onClick={() => handleAmountClick("200")}
                >
                  $200
                </button>
              </div>
              <button className="theme_btn theme_btn_bg">
                Donate now{" "}
                <span>
                  <i className="fas fa-heart"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-6">
            <div className="about-wrapper about-wrap-02 mb-60">
              <div
                className="section-title text-left mb-20 wow fadeInUp2 animated"
                data-wow-delay=".1s"
              >
                <h6>
                  <span>
                    <i className="fas fa-heart"></i>
                  </span>{" "}
                  Get Started With Us
                </h6>
                <h2>
                  Ready To Donate
                  <br />
                  Million Refugee
                </h2>
              </div>
              <p>
                Sed perspiciatis unde omnis iste natus voluptate accntium
                doloremque laudantium totam aperiams eaque ipsa quailinve ntore
                veritatis architecto
              </p>
              <ul
                className="about_list mt-30 mb-20 wow fadeInUp2 animated"
                data-wow-delay=".2s"
              >
                <li>Employee Giving Funds - Corporate Generosity</li>
                <li>Make Honest Design Work For Digital Business</li>
                <li>Building An E-Commerce Site With October</li>
              </ul>
              <Link
                href="/about"
                className="theme_btn theme_btn2 theme_btn_bg_02"
              >
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
