/** @type {import('next').NextConfig} */
// Configuration for Next.js static export to GitHub Pages
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
