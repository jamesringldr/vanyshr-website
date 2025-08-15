/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Custom domain configuration
  assetPrefix: '',
  basePath: ''
};

module.exports = nextConfig;
