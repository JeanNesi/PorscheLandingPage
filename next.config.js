/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
