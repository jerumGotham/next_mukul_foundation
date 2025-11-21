"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ServicesArea() {
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    education: "",
    program: "",
    income: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "unset";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Application submitted successfully!");
    handleCloseModal();
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      address: "",
      education: "",
      program: "",
      income: "",
      message: "",
    });
  };

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
                        <Link href="">Scholarship</Link>
                      </h4>
                      <p>Providing financial assistance for education</p>
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
      className="services-area grey-bg2 pb-100"
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
                    src="/assets/img/added/students3.jpg"
                    alt="Apply Now"
                    width={350}
                    height={250}
                    className="w-100"
                  />
                </div>
                <ul className="services__content heding-bg pos-abl">
                  <li>
                    <h4 className="semi-02-title">
                      <Link href="#" onClick={handleOpenModal}>
                        Apply Now
                      </Link>
                    </h4>
                    {/* <p>Financial Assistance</p> */}
                  </li>
                  <li>
                    <Link
                      className="more_btn"
                      href="#"
                      onClick={handleOpenModal}
                    >
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
                    src="/assets/img/added/8.jpg"
                    alt="Scholarship Programs"
                    width={350}
                    height={50}
                    className="w-100"
                  />
                </div>
                <ul className="services__content heding-bg pos-abl">
                  <li>
                    <h4 className="semi-02-title">
                      <Link href="">Scholarship Programs</Link>
                    </h4>
                    {/* <p>Academic assistance</p> */}
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
                    src="/assets/img/added/6.jpg"
                    alt="Get Involved"
                    width={350}
                    height={250}
                    className="w-100"
                  />
                </div>
                <ul className="services__content heding-bg pos-abl">
                  <li>
                    <h4 className="semi-02-title">
                      <Link href="">Get Involved</Link>
                    </h4>
                    {/* <p>Honoring the legacy</p> */}
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

      {/* Application Modal */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#ffffffff",
              borderRadius: "15px",
              maxWidth: "700px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
              position: "relative",
              border: "1px solid #393939",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #b6850b 0%, #a33607 100%)",
                padding: "30px",
                borderRadius: "15px 15px 0 0",
                color: "white",
                position: "relative",
              }}
            >
              <button
                onClick={handleCloseModal}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(255, 255, 255, 0.15)",
                  border: "none",
                  color: "white",
                  fontSize: "24px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.transform = "rotate(90deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.transform = "rotate(0deg)";
                }}
              >
                ×
              </button>
              <h2 style={{ margin: 0, fontSize: "28px", fontWeight: "700" }}>
                Scholarship Application
              </h2>
              {/* <p
                style={{ margin: "10px 0 0 0", opacity: 0.9, fontSize: "16px" }}
              >
                Fill out the form below to apply for our scholarship program
              </p> */}
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} style={{ padding: "30px" }}>
              <div className="row">
                {/* Full Name */}
                <div className="col-md-6 mb-3">
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Full Name <span style={{ color: "#b6850b" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      border: "2px solid #393939",
                      borderRadius: "8px",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      outline: "none",
                      backgroundColor: "#8B0000",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#b6850b";
                      e.target.style.backgroundColor = "#2a2a2a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#393939";
                      e.target.style.backgroundColor = "#000";
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="col-md-6 mb-3">
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Email Address <span style={{ color: "#b6850b" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      border: "2px solid #393939",
                      borderRadius: "8px",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      outline: "none",
                      backgroundColor: "#000",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#b6850b";
                      e.target.style.backgroundColor = "#2a2a2a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#393939";
                      e.target.style.backgroundColor = "#000";
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="col-md-6 mb-3">
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Phone Number <span style={{ color: "#b6850b" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      border: "2px solid #393939",
                      borderRadius: "8px",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      outline: "none",
                      backgroundColor: "#000",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#b6850b";
                      e.target.style.backgroundColor = "#2a2a2a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#393939";
                      e.target.style.backgroundColor = "#000";
                    }}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Date of Birth */}
                <div className="col-md-6 mb-3">
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Date of Birth <span style={{ color: "#b6850b" }}>*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      border: "2px solid #393939",
                      borderRadius: "8px",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      outline: "none",
                      backgroundColor: "#000",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#b6850b";
                      e.target.style.backgroundColor = "#2a2a2a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#393939";
                      e.target.style.backgroundColor = "#000";
                    }}
                  />
                </div>

                {/* Address */}
                <div className="col-12 mb-3">
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Address <span style={{ color: "#b6850b" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      border: "2px solid #393939",
                      borderRadius: "8px",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      outline: "none",
                      backgroundColor: "#000",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#b6850b";
                      e.target.style.backgroundColor = "#2a2a2a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#393939";
                      e.target.style.backgroundColor = "#000";
                    }}
                    placeholder="Enter your complete address"
                  />
                </div>

                {/* Current Education Level */}
                <div className="col-md-6 mb-3">
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Current Education Level{" "}
                    <span style={{ color: "#b6850b" }}>*</span>
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      border: "2px solid #393939",
                      borderRadius: "8px",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      outline: "none",
                      backgroundColor: "#000",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#b6850b";
                      e.target.style.backgroundColor = "#2a2a2a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#393939";
                      e.target.style.backgroundColor = "#000";
                    }}
                  >
                    <option
                      value=""
                      style={{ backgroundColor: "#000", color: "#aaa" }}
                    >
                      Select education level
                    </option>
                    <option
                      value="high-school"
                      style={{ backgroundColor: "#000" }}
                    >
                      High School
                    </option>
                    <option
                      value="undergraduate"
                      style={{ backgroundColor: "#000" }}
                    >
                      Undergraduate
                    </option>
                    <option
                      value="graduate"
                      style={{ backgroundColor: "#000" }}
                    >
                      Graduate
                    </option>
                    <option
                      value="postgraduate"
                      style={{ backgroundColor: "#000" }}
                    >
                      Postgraduate
                    </option>
                  </select>
                </div>

                {/* Program */}
                <div className="col-md-6 mb-3">
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Program/Field of Study{" "}
                    <span style={{ color: "#b6850b" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      border: "2px solid #393939",
                      borderRadius: "8px",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      outline: "none",
                      backgroundColor: "#000",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#b6850b";
                      e.target.style.backgroundColor = "#2a2a2a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#393939";
                      e.target.style.backgroundColor = "#000";
                    }}
                    placeholder="e.g., Computer Science, Medicine"
                  />
                </div>

                {/* Family Income */}
                <div className="col-12 mb-3">
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Annual Family Income{" "}
                    <span style={{ color: "#b6850b" }}>*</span>
                  </label>
                  <select
                    name="income"
                    value={formData.income}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      border: "2px solid #393939",
                      borderRadius: "8px",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      outline: "none",
                      backgroundColor: "#000",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#b6850b";
                      e.target.style.backgroundColor = "#2a2a2a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#393939";
                      e.target.style.backgroundColor = "#000";
                    }}
                  >
                    <option
                      value=""
                      style={{ backgroundColor: "#000", color: "#aaa" }}
                    >
                      Select income range
                    </option>
                    <option value="0-25k" style={{ backgroundColor: "#000" }}>
                      $0 - $25,000
                    </option>
                    <option value="25k-50k" style={{ backgroundColor: "#000" }}>
                      $25,000 - $50,000
                    </option>
                    <option value="50k-75k" style={{ backgroundColor: "#000" }}>
                      $50,000 - $75,000
                    </option>
                    <option
                      value="75k-100k"
                      style={{ backgroundColor: "#000" }}
                    >
                      $75,000 - $100,000
                    </option>
                    <option value="100k+" style={{ backgroundColor: "#000" }}>
                      $100,000+
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="col-12 mb-3">
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#000",
                      fontSize: "14px",
                    }}
                  >
                    Why do you deserve this scholarship?{" "}
                    <span style={{ color: "#b6850b" }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      border: "2px solid #393939",
                      borderRadius: "8px",
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                      backgroundColor: "#000",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#b6850b";
                      e.target.style.backgroundColor = "#2a2a2a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#393939";
                      e.target.style.backgroundColor = "#000";
                    }}
                    placeholder="Tell us about yourself, your goals, and why you need this scholarship..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "15px 30px",
                    background:
                      "linear-gradient(135deg, #b6850b 0%, #a33607 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(125, 40, 5, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(125, 40, 5, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(125, 40, 5, 0.3)";
                  }}
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  style={{
                    padding: "15px 30px",
                    background: "#000",
                    color: "#000",
                    border: "2px solid #393939",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2a2a2a";
                    e.currentTarget.style.borderColor = "#b6850b";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#000";
                    e.currentTarget.style.borderColor = "#393939";
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          animation: slideUp 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 767px) {
          .modal-content {
            margin: 20px auto;
          }
        }
      `}</style>
    </section>
  );
}
