"use client";
import { useState, useEffect } from "react";

export default function CounterArea() {
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState({
    donations: 0,
    volunteers: 0,
    projects: 0,
    beneficiaries: 0,
  });

  useEffect(() => {
    setMounted(true);

    // Animate counters
    const animateCounters = () => {
      const targets = {
        donations: 2500,
        volunteers: 150,
        projects: 85,
        beneficiaries: 10000,
      };

      const duration = 2000; // 2 seconds
      const step = 50; // Update every 50ms
      const steps = duration / step;

      Object.keys(targets).forEach((key) => {
        const increment = targets[key] / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= targets[key]) {
            current = targets[key];
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            [key]: Math.floor(current),
          }));
        }, step);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="counter-area"></div>;
  }

  return (
    <div className="counter-area theme-bg pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="counter-wrapper text-center mb-30">
              <div className="counter-icon">
                <i className="flaticon-heart"></i>
              </div>
              <div className="counter-text">
                <h1 className="counter">
                  {counters.donations.toLocaleString()}
                </h1>
                <span>Total Donations</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="counter-wrapper text-center mb-30">
              <div className="counter-icon">
                <i className="flaticon-networking"></i>
              </div>
              <div className="counter-text">
                <h1 className="counter">
                  {counters.volunteers.toLocaleString()}
                </h1>
                <span>Active Volunteers</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="counter-wrapper text-center mb-30">
              <div className="counter-icon">
                <i className="flaticon-creativity"></i>
              </div>
              <div className="counter-text">
                <h1 className="counter">
                  {counters.projects.toLocaleString()}
                </h1>
                <span>Completed Projects</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="counter-wrapper text-center mb-30">
              <div className="counter-icon">
                <i className="flaticon-prize"></i>
              </div>
              <div className="counter-text">
                <h1 className="counter">
                  {counters.beneficiaries.toLocaleString()}
                </h1>
                <span>Lives Impacted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
