/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      FROM_EMAIL: process.env.FROM_EMAIL,
    },
  }
  
  module.exports = nextConfig
  