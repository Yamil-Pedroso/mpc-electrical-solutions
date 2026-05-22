// src/components/common/LocalBusinessSchema.tsx

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "MPC Electrical Solutions",
    url: "https://www.mpcelectricalsolutions.com/",
    image: "https://www.mpcelectricalsolutions.com/og-image.jpg",
    logo: "https://www.mpcelectricalsolutions.com/logo.png",
    telephone: "+1-647-460-0292",
    priceRange: "$$",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },

    areaServed: [
      "Toronto",
      "North York",
      "Scarborough",
      "Etobicoke",
      "York",
      "East York",
      "Downtown Toronto",
      "Midtown Toronto",
      "Old Toronto",
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],

    sameAs: [
      "https://www.google.com/maps/search/?api=1&query=MPC%20Electrical%20Solutions%20Toronto",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
