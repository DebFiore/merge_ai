import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaBase = ({ schema }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SchemaBase;
