import React from 'react';
import SchemaBase from './SchemaBase';

const SoftwareApplicationSchema = () => {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MERGE AI Platform",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Lead Generation Software",
    "operatingSystem": "Web-based",
    "description": "Omnichannel AI platform featuring conversational voice agents, automated texting, email marketing, and CRM integration for lead qualification and appointment booking.",
    "url": "https://mergemedia.ai",
    "creator": {
      "@type": "Organization",
      "@id": "https://mergemedia.ai#organization"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2023-01-01"
    },
    "featureList": [
      "AI Voice Calling with Human-like Conversations",
      "Automated Text Message Campaigns", 
      "Email Marketing Automation",
      "CRM Integration (HubSpot, Salesforce, Pipedrive)",
      "Intelligent Appointment Booking",
      "Lead Qualification and Scoring",
      "Multi-language Support (12 languages)",
      "Voice Cloning and Brand Voice Customization",
      "Real-time Call Analytics",
      "Omnichannel Data Synchronization"
    ],
    "screenshot": "https://www.mergemedia.ai/wp-content/uploads/2025/02/MERGE-AI-Lead-Generation.jpg",
    "softwareVersion": "2.0",
    "releaseNotes": "Enhanced AI conversation capabilities and expanded CRM integrations"
  };

  return <SchemaBase schema={softwareSchema} />;
};

export default SoftwareApplicationSchema;
