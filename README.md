# Vanyshr Marketing Website

A modern, responsive marketing website for Vanyshr - a privacy and data removal SaaS platform. Built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Single-page design** with smooth scrolling between sections
- **Fully responsive** - optimized for mobile, tablet, and desktop
- **SEO-friendly** with proper meta tags and semantic HTML
- **Modern animations** using Framer Motion
- **Accessible design** with proper color contrast and keyboard navigation
- **Static export ready** for GitHub Pages deployment

## 🎨 Design System

### Brand Colors
- **Primary Background**: `#F8FBFD` (brand-bg)
- **Primary Text**: `#022136` (brand-text)
- **Primary Accent**: `#00AEEF` (brand-accent)
- **Secondary Accent**: `#FF8400` (brand-accent2)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with SEO meta tags
│   └── page.tsx             # Main page component
├── components/              # Reusable components (future use)
└── lib/                     # Utility functions (future use)
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Static export ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vanyshr-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site (for GitHub Pages)

## 📱 Page Sections

1. **Hero Section** - Value proposition with CTA buttons
2. **How It Works** - 3-step process explanation
3. **Features & Benefits** - Grid of key features
4. **Pricing** - 3-tier pricing plans
5. **Testimonials** - Customer reviews and social proof
6. **FAQ** - Interactive accordion with common questions
7. **Footer** - Links and company information

## 🎯 Customization

### Content Updates
- All text content is in the `page.tsx` file
- Easy to replace placeholder text with actual content
- Hero image placeholder ready for replacement

### Styling Changes
- Brand colors defined in `tailwind.config.ts`
- Component styles in `globals.css`
- Responsive breakpoints follow Tailwind defaults

### Adding New Sections
- Follow the existing pattern in `page.tsx`
- Use Framer Motion for animations
- Maintain consistent spacing with `section-padding` class

## 🌐 Deployment

### GitHub Pages (Static Export)

1. **Build and export**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to GitHub Pages**
   - Push the `out` folder to your repository
   - Enable GitHub Pages in repository settings
   - Set source to `/docs` or deploy from branch

### Other Platforms
- **Vercel**: Connect repository for automatic deployments
- **Netlify**: Drag and drop the `out` folder
- **AWS S3**: Upload static files to S3 bucket

## 📊 SEO & Performance

### SEO Features
- Semantic HTML structure
- Meta tags for social sharing
- Open Graph and Twitter Card support
- Proper heading hierarchy
- Alt text for images (when added)

### Performance Optimizations
- Static generation for fast loading
- Optimized images (when added)
- Minimal JavaScript bundle
- CSS purging with Tailwind

## 🔧 Development Notes

### Animation Guidelines
- Use `motion.div` for scroll-triggered animations
- Implement `whileInView` for scroll reveals
- Keep animations subtle and professional
- Ensure animations don't interfere with accessibility

### Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach

## 📝 Content Guidelines

### Copy Updates
- Replace placeholder text with actual Vanyshr content
- Maintain consistent tone and messaging
- Ensure all CTAs link to appropriate pages
- Update pricing and features as needed

### Image Replacements
- Hero section placeholder ready for illustration
- Maintain aspect ratios for responsive design
- Optimize images for web performance
- Include proper alt text

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Vanyshr. All rights reserved.

## 📞 Support

For questions or support, contact the development team or refer to the project documentation.
