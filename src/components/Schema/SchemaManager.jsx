import React from 'react';
import { useLocation } from 'react-router-dom';

// Import schema components we've created
import OrganizationSchema from './OrganizationSchema';
import WebSiteSchema from './WebSiteSchema';

const SchemaManager = ({ pageType, customSchemas = [] }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define schemas for different page types
  const getSchemasByPage = () => {
    const schemas = [];

    // Core schemas for all pages
    schemas.push(<OrganizationSchema key="organization" />);
    schemas.push(<WebSiteSchema key="website"
