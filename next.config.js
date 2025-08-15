/** @type {import('next').NextConfig} */
// Configuration for Next.js static export to GitHub Pages
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Custom domain configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vanyshr-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/vanyshr-website' : ''
};

module.exports = nextConfig;
