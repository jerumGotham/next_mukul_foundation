// src/components/ExternalStyles.js
"use client";
import { useEffect } from "react";

export default function ExternalStyles() {
  useEffect(() => {
    // Array of CSS files to load
    const cssFiles = [
      "/assets/css/bootstrap.min.css",
      "/assets/css/owl.carousel.min.css",
      "/assets/css/animate.css",
      "/assets/css/magnific-popup.css",
      "/assets/css/all.min.css",
      "/assets/css/flaticon.css",
      "/assets/css/font.css",
      "/assets/css/themify-icons.css",
      "/assets/css/metisMenu.css",
      "/assets/css/nice-select.css",
      "/assets/css/slick.css",
      "/assets/css/main.css?v=" + Date.now(),
      "/assets/css/custom-foundation.css?v=" + Date.now(),
    ];

    // Load CSS files dynamically
    cssFiles.forEach((href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    });

    return () => {
      // Optional: Clean up CSS on unmount (usually not needed)
      // cssFiles.forEach((href) => {
      //   const link = document.querySelector(`link[href="${href}"]`);
      //   if (link) link.remove();
      // });
    };
  }, []);

  return null; // This component doesn't render anything
}
