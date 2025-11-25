# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IntakeBrain Landing Page - A marketing landing page for IntakeBrain, an AI-powered case intake tool for Personal Injury law firms.

## Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion (scroll-triggered fade-ins)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## Architecture

### Page Structure
The landing page (`app/page.tsx`) assembles these sections in order:
1. **Navbar** - Fixed navigation with text logo and CTA
2. **Hero** - Main headline, subheadline, dual CTAs
3. **Features** - 3-column grid (Automatic Cleanup, Case Briefs, Missing Info)
4. **Screenshots** - Placeholder boxes for product screenshots
5. **How It Works** - 3-step process flow
6. **Benefits** - 2x2 grid of value propositions
7. **Pricing** - Single $300/month pilot plan card
8. **Founder** - About section with founder info
9. **Final CTA** - Dark navy section with call-to-action
10. **Footer** - Simple footer with email

### Key Components
- `components/fade-in.tsx` - Reusable scroll animation wrapper using Framer Motion
- `components/contact-form.tsx` - Modal dialog with form validation
- `app/api/contact/route.ts` - API endpoint for form submissions (logs to console, ready for email service)

## Design System

### Colors (defined in `tailwind.config.ts`)
- Navy (primary): `#0C1B33`
- Gold (accent): `#C8A14B`
- Light gray background: `#F7F7F8`

### Typography
- Font: Inter (via next/font/google)
- Headings: Bold, navy color
- Body: Regular weight, muted foreground

### Buttons
- Primary: Navy background, white text, rounded-md
- Secondary/Outline: Navy border, transparent background

## Adding Screenshots

Replace the placeholder boxes in `components/screenshots.tsx`:
1. Add images to `public/images/`
2. Update the component to use `next/image` with the new paths

## Connecting Email Service

In `app/api/contact/route.ts`, uncomment and configure the email service (Resend recommended):
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
```
