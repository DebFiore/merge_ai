import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication disabled for public access
export const base44 = createClient({
  appId: "68856cb8a9268423a353c4f4", 
  requiresAuth: false // Allow public access without authentication
});
