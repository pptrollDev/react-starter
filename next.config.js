/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    HOSPITAL_ADMIN_URI: process.env.HOSPITAL_ADMIN_URI
  }
};
