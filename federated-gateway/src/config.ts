import 'dotenv/config';

const {
  SALES_PLATFORM_SERVICE_URL = 'http://localhost:4000/graphql',
  PROGRAMS_SERVICE_URL = 'http://localhost:4001/graphql',
} = process.env;

export const config = {
  server: {
    port: 4000,
  },
  services: {
    salesPlatform: SALES_PLATFORM_SERVICE_URL,
    programs: PROGRAMS_SERVICE_URL,
  },
};
