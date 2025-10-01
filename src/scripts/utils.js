/*
 * Custom JavaScript utilities for Mukul Foundation
 * Place your custom JavaScript functions here
 *
 * This file can be imported in components using:
 * import { functionName } from '@/scripts/utils';
 */

// Example utility functions
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Custom analytics or tracking functions
export const trackDonation = (amount) => {
  // Add your tracking logic here
  console.log(`Donation tracked: $${amount}`);
};

export const trackPageView = (pageName) => {
  // Add your analytics tracking here
  console.log(`Page view tracked: ${pageName}`);
};

// Form validation utilities
export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long";
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
