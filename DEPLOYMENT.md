# Deployment Guide - Vanyshr Website

This guide covers deploying the Vanyshr marketing website to various platforms.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run export
```

## 📦 Static Export

The website is configured for static export, generating files in the `out/` directory.

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Static export (for GitHub Pages, Netlify, etc.)
npm run export
```

## 🌐 Deployment Options

### 1. GitHub Pages

#### Option A: Deploy from Branch
1. **Build the project**
   ```bash
   npm run export
   ```

2. **Create a new branch for deployment**
   ```bash
   git checkout -b gh-pages
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

#### Option B: Deploy to /docs
1. **Build and copy to docs**
   ```bash
   npm run export
   cp -r out/* docs/
   ```

2. **Commit and push**
   ```bash
   git add docs/
   git commit -m "Update docs for GitHub Pages"
   git push origin main
   ```

3. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs

### 2. Vercel (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Install Command: `npm install`

3. **Deploy**
   - Vercel will automatically deploy on every push
   - Custom domain can be added in project settings

### 3. Netlify

1. **Build Locally**
   ```bash
   npm run export
   ```

2. **Deploy Options**
   - **Drag & Drop**: Upload the `out/` folder
   - **Git Integration**: Connect repository and set build command

3. **Build Settings**
   - Build command: `npm run export`
   - Publish directory: `out`
   - Node version: 18 (or latest LTS)

### 4. AWS S3 + CloudFront

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://vanyshr-website
   ```

2. **Configure for Static Website**
   ```bash
   aws s3 website s3://vanyshr-website --index-document index.html --error-document 404.html
   ```

3. **Upload Files**
   ```bash
   npm run export
   aws s3 sync out/ s3://vanyshr-website --delete
   ```

4. **Set Up CloudFront** (Optional)
   - Create CloudFront distribution
   - Origin: S3 bucket
   - Configure caching and HTTPS

## 🔧 Environment Variables

### Development
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production
Set environment variables in your deployment platform:

**Vercel:**
```env
NEXT_PUBLIC_SITE_URL=https://vanyshr.com
```

**Netlify:**
```env
NEXT_PUBLIC_SITE_URL=https://vanyshr.com
```

## 📊 Performance Optimization

### Pre-deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test static export with `npm run export`
- [ ] Verify all images are optimized
- [ ] Check mobile responsiveness
- [ ] Test all links and CTAs
- [ ] Validate SEO meta tags

### Performance Monitoring
- **Lighthouse**: Run performance audits
- **Google PageSpeed Insights**: Monitor Core Web Vitals
- **WebPageTest**: Detailed performance analysis

## 🔒 Security Considerations

### HTTPS
- Enable HTTPS on all deployments
- Redirect HTTP to HTTPS
- Use HSTS headers

### Content Security Policy
Add CSP headers to prevent XSS attacks:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

## 📱 Mobile Optimization

### Testing Checklist
- [ ] Responsive design on all screen sizes
- [ ] Touch-friendly buttons and links
- [ ] Fast loading on mobile networks
- [ ] Proper viewport meta tag
- [ ] Optimized images for mobile

## 🔄 Continuous Deployment

### GitHub Actions (GitHub Pages)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm install
    - run: npm run export
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

### Vercel
- Automatic deployments on push to main branch
- Preview deployments for pull requests
- Custom domain management

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Export Issues**
```bash
# Ensure static export is configured
# Check next.config.js for output: 'export'
```

**Deployment Failures**
- Check build logs in deployment platform
- Verify environment variables
- Ensure all dependencies are installed

### Support
- Check deployment platform documentation
- Review Next.js deployment guides
- Contact development team for assistance

## 📈 Analytics Setup

### Google Analytics
Add to `layout.tsx`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Other Analytics
- **Plausible**: Privacy-focused analytics
- **Fathom**: Simple, privacy-friendly analytics
- **Mixpanel**: Event tracking and user analytics

## 🔄 Updates and Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor performance metrics
- Review and update content
- Test on different devices/browsers
- Backup deployment configurations

### Version Control
- Tag releases for easy rollback
- Document breaking changes
- Maintain changelog
- Test deployment process regularly
