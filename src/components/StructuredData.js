export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Mukul Foundation",
    description:
      "Mukul Foundation is dedicated to creating positive change and empowering communities through education, healthcare, and sustainable development initiatives.",
    url: "https://mukulfoundation.org", // Replace with your actual domain
    logo: "https://mukulfoundation.org/logo.png", // Replace with your actual logo URL
    sameAs: [
      "https://twitter.com/mukulfoundation", // Replace with actual social media URLs
      "https://facebook.com/mukulfoundation",
      "https://linkedin.com/company/mukulfoundation",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Foundation Street",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "info@mukulfoundation.org",
    },
    foundingDate: "2020", // Replace with actual founding date
    nonprofitStatus: "Nonprofit501c3",
    mission:
      "To create a world where every individual has access to opportunities for growth, education, and a dignified life.",
    areaServed: "Global",
    knowsAbout: [
      "Education",
      "Healthcare",
      "Sustainable Development",
      "Community Empowerment",
      "Skill Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
