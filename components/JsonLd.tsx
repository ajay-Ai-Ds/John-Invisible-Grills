import React from "react";

export default function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "John Invisible Grills",
    "url": "https://johninvisiblegrills.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://johninvisiblegrills.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "John Invisible Grills",
    "url": "https://johninvisiblegrills.com",
    "logo": "https://johninvisiblegrills.com/images/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9912373373",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "telugu", "hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9951666645",
        "contactType": "sales representative",
        "areaServed": "IN",
        "availableLanguage": ["en", "telugu", "hindi"]
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "John Invisible Grills",
    "image": "https://johninvisiblegrills.com/images/carousel.webp",
    "@id": "https://johninvisiblegrills.com/#localbusiness",
    "url": "https://johninvisiblegrills.com",
    "telephone": "+91-9912373373",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "KPHB Colony, Kukatpally",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500072",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4943486,
      "longitude": 78.3905834
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://facebook.com/johninvisiblegrills",
      "https://instagram.com/johninvisiblegrills"
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Hyderabad"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
