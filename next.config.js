/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Update this with your actual repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vanyshr-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/vanyshr-website' : ''
};

module.exports = nextConfig;
