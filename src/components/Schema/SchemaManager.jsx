import React from 'react';
import { useLocation } from 'react-router-dom';

// Import schema components we've created
import OrganizationSchema from './OrganizationSchema';
import WebSiteSchema from './WebSiteSchema';
import SoftwareApplicationSchema from './SoftwareApplicationSchema';

const SchemaManager = ({ pageType, customSchemas = [] }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define schemas for different page types
  const getSchemasByPage = () => {
    const schemas = [];

    // Core schemas for all pages
    schemas.push(<OrganizationSchema key="organization" />);
    schemas.push(<WebSiteSchema key="website" />);
    
    // Homepage schemas
    if (pageType === 'homepage' || currentPath === '/') {
      schemas.push(<SoftwareApplicationSchema key="software" />);
    }

    // Add any custom schemas passed as props
    return [...schemas, ...customSchemas];
  };

  const allSchemas = getSchemasByPage();

  return (
    <>
      {allSchemas.map(schema => schema)}
    </>
  );
};

export default SchemaManager;
