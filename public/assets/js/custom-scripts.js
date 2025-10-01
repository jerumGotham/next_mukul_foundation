/*
 * External JavaScript file example
 * This file can be loaded using Next.js Script component
 * Place your existing JavaScript files here
 */

// Example: Custom donation form handler
window.DonationHandler = {
  init: function () {
    console.log("Donation handler initialized");
    this.bindEvents();
  },

  bindEvents: function () {
    // Add event listeners for donation forms
    const donationButtons = document.querySelectorAll(".donation-btn");
    donationButtons.forEach((button) => {
      button.addEventListener("click", this.handleDonation.bind(this));
    });
  },

  handleDonation: function (event) {
    const amount = event.target.dataset.amount;
    console.log(`Processing donation of $${amount}`);
    // Add your donation processing logic here
  },
};

// Auto-initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  if (window.DonationHandler) {
    window.DonationHandler.init();
  }
});
