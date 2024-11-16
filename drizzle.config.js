import { defineConfig } from 'drizzle-kit';

export default defineConfig({  
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
     url: 'postgresql://ai%20room%20designer_owner:XHce7Q9dUyCO@ep-soft-bonus-a1hew4wn.ap-southeast-1.aws.neon.tech/ai%20room%20designer?sslmode=require',
  },
});
