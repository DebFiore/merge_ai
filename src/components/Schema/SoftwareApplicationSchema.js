import React from 'react';
import SchemaBase from './SchemaBase';

const SoftwareApplicationSchema = () => {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MERGE AI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered omnichannel lead generation platform featuring voice calling, text automation, and email marketing for businesses."
  };

  return <SchemaBase schema={softwareSchema} />;
};

export default SoftwareApplicationSchema;
