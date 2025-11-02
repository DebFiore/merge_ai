import React from 'react';
import SchemaBase from './SchemaBase';

const OrganizationSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mergemedia.ai#organization",
    "name": "MERGE AI",
    "legalName": "MERGE AI",
    "url": "https://mergemedia.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mergemedia.ai/wp-content/uploads/2025/04/MERGE-AI-horizontal-logo.white_.-transparent.png",
      "width": "400",
      "height": "100"
    },
    "description": "AI-powered omnichannel lead generation and eng
