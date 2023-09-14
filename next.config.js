/**
 * @type {import('next').NextConfig}
 */
// const { i18n } = require("./next-i18next.config");
// const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // assetPrefix: isProd ? 'https://cdn.b-circles.co' : undefined,
  // i18n,
};

module.exports = nextConfig;
