# TechVapor Website

Modern, performant Next.js website template for TechVapor, built with React 19, TypeScript, and Tailwind CSS v4.

## Features

- ⚡ **Next.js 15.5.3** - Latest Next.js with App Router and Turbopack
- ⚛️ **React 19** - Latest React with improved performance
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 📊 **PostHog Analytics** - Privacy-focused product analytics
- 🌐 **Multi-language Support** - English and French translations
- 📧 **Contact Form** - Integrated with Resend email API
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and Twitter cards
- 🚀 **Performance Optimized** - Lazy loading, dynamic imports, image optimization
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG 2.1 compliant components
- 🎭 **shadcn/ui Components** - Beautiful, accessible UI components

## Tech Stack

### Core
- **Framework**: Next.js 15.5.3
- **Language**: TypeScript 5
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS v4

### UI Components
- shadcn/ui (New York style)
- Radix UI primitives
- Lucide React icons
- Class Variance Authority (CVA)

### Analytics & Monitoring
- PostHog (client & server)
- Vercel Speed Insights

### Email
- Resend API for contact form

### Development Tools
- ESLint 9 with Next.js, TypeScript, and Prettier configs
- Prettier with Tailwind plugin
- pnpm for package management

## Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository** (if not already done)
   ```bash
   cd techvapor-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   or
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your actual API keys:
   ```env
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```
   or
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Required API Keys

#### PostHog (Analytics)
1. Sign up at [posthog.com](https://posthog.com/)
2. Create a new project
3. Copy your Project API Key
4. Add it to `.env` as `NEXT_PUBLIC_POSTHOG_KEY`

#### Resend (Email)
1. Sign up at [resend.com](https://resend.com/)
2. Go to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Add it to `.env` as `RESEND_API_KEY`

### Content Customization

#### 1. Site Content (`src/lib/constants/site-content.ts`)

This is the **most important file** to customize. It contains all the text content for your website:

- Company name, tagline, and description
- Navigation items
- Hero section content
- Services and value propositions
- Team member bios
- Contact information

**Search for `[TODO: ...]` markers** throughout the file and replace them with your actual content.

#### 2. Metadata (`src/app/layout.tsx`)

Update the following:
- Site title and description
- Open Graph images
- Twitter card information
- Favicon references (replace `/vh_logo.svg` with your logo)
- metadataBase URL (change from vectorhorizon.ca to your domain)

#### 3. Email Configuration (`src/app/api/contact/route.ts`)

Update the contact form email addresses:
- Line 37: Change `from` email to your domain
- Line 38: Change `to` email to your team email

#### 4. Brand Colors (`src/app/globals.css`)

Update the CSS variables (lines 80-89) with your brand colors:
```css
--brand-gradient-start: #your-color;
--brand-gradient-middle: #your-color;
--brand-gradient-end: #your-color;
```

#### 5. Logo and Public Assets (`public/`)

Replace the placeholder logos:
- `vh_logo.svg` - Replace with your logo
- `favicon.svg` - Replace with your favicon
- Remove unused assets (file.svg, globe.svg, etc.)

## Development Scripts

```bash
# Development server with Turbopack
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code with Prettier
pnpm format

# Check code formatting
pnpm format:check

# Type check without emitting files
pnpm type-check
```

## Project Structure

```
techvapor-website/
├── public/                  # Static assets (images, icons, etc.)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/           # API routes
│   │   │   └── contact/   # Contact form endpoint
│   │   ├── globals.css    # Global styles and Tailwind config
│   │   ├── layout.tsx     # Root layout with metadata
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Page sections (Hero, About, etc.)
│   │   └── ui/            # Reusable UI components (shadcn/ui)
│   ├── lib/
│   │   ├── constants/     # Site content and configuration
│   │   ├── contexts/      # React contexts (Language, PostHog)
│   │   ├── hooks/         # Custom React hooks
│   │   ├── analytics.ts   # PostHog analytics setup
│   │   ├── config.ts      # App configuration
│   │   └── utils.ts       # Utility functions
│   └── types/
│       └── index.ts       # TypeScript type definitions
├── .env                    # Environment variables (create from .env.example)
├── .env.example           # Environment variables template
├── components.json        # shadcn/ui configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

Make sure to:
1. Set Node.js version to 20+
2. Set build command to `pnpm build` or `npm run build`
3. Set output directory to `.next`
4. Add all environment variables

## Customization Checklist

Use this checklist to ensure you've customized all the necessary parts:

### Content
- [ ] Update `src/lib/constants/site-content.ts` with your content
- [ ] Replace all `[TODO: ...]` markers with actual content
- [ ] Update company name from "TechVapor" to your actual name (if different)

### Branding
- [ ] Replace logo files in `public/`
- [ ] Update brand colors in `src/app/globals.css`
- [ ] Update favicon references in `src/app/layout.tsx`

### Configuration
- [ ] Set up `.env` file with API keys
- [ ] Update email addresses in `src/app/api/contact/route.ts`
- [ ] Update metadata and SEO tags in `src/app/layout.tsx`
- [ ] Update `metadataBase` URL in `src/app/layout.tsx`

### Optional
- [ ] Customize Tailwind theme in `src/app/globals.css`
- [ ] Add/remove sections in `src/app/page.tsx`
- [ ] Modify navigation items if needed
- [ ] Add Google Analytics (if needed instead of/in addition to PostHog)

## Performance Features

- **Lazy Loading**: Sections below the fold are dynamically imported
- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Geist fonts with `display: swap`
- **Critical CSS**: Inlined for above-the-fold content
- **Turbopack**: Fast development builds
- **PostHog Proxy**: Rewrites to avoid ad blockers

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Troubleshooting

### Build Errors

**Issue**: `Module not found` errors
**Solution**: Run `pnpm install` to ensure all dependencies are installed

**Issue**: TypeScript errors
**Solution**: Run `pnpm type-check` to see all type errors

### Runtime Errors

**Issue**: PostHog not tracking
**Solution**: Check that `NEXT_PUBLIC_POSTHOG_KEY` is set in `.env`

**Issue**: Contact form not sending emails
**Solution**: Verify `RESEND_API_KEY` is correct and you've verified your domain in Resend

**Issue**: Styles not loading
**Solution**: Clear `.next` folder and rebuild: `rm -rf .next && pnpm build`

## Support

For issues or questions:
1. Check this README thoroughly
2. Review the TODO comments in the code
3. Consult the [Next.js documentation](https://nextjs.org/docs)
4. Check [Tailwind CSS docs](https://tailwindcss.com/docs)

## License

[TODO: Add your license here]

---

**Built with ❤️ using the TNL Website template**
