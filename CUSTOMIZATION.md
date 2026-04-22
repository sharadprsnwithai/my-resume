# Portfolio Customization Guide

This portfolio is built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**. Here's how to customize it with your information.

## Quick Start

1. **Start the dev server** (if not already running):
   ```bash
   npm run dev
   ```
   Then open http://localhost:3000 in your browser.

2. **Open the project** in your favorite code editor.

## Files to Customize

### 1. Personal Information

**`src/app/layout.tsx`** - Update the metadata:
- Your name
- Title/role
- Description for SEO
- OpenGraph tags for social sharing

**`src/components/Hero.tsx`** - Update the hero section:
- Your name (line ~47)
- Your title (line ~54)
- Description text (line ~61)
- Optional: Change the 3 featured tech icons

### 2. About Section

**`src/components/About.tsx`**:
- Update the stats (years experience, projects, certifications)
- Edit your bio/summary text
- Customize the 3 highlight boxes
- Add your photo (replace the User icon with an Image component)

### 3. Skills Section

**`src/components/Skills.tsx`**:
- Edit skill categories and individual skills
- Adjust proficiency levels (0-100)
- Change color gradients for each skill
- Update the "Also experienced with" tags at the bottom

### 4. Experience Section

**`src/components/Experience.tsx`**:
- Add/edit your work experiences
- Each experience includes:
  - Title, company, location, period
  - Description
  - Achievements (bullet points)
  - Technologies used

### 5. Projects Section

**`src/components/Projects.tsx`**:
- Add/edit your projects
- Each project includes:
  - Title, description, icon
  - Features list
  - Technologies
  - GitHub/demo links
- Add project images to `/public/projects/` folder

### 6. Contact Section

**`src/components/Contact.tsx`**:
- Update your email address
- Add your social media links (GitHub, LinkedIn, Twitter)
- Update your location
- The contact form is frontend-only - connect it to a service like Formspree or create an API route

### 7. Navigation

**`src/components/Navigation.tsx`**:
- Edit navigation items if needed
- The nav automatically highlights the current section

## Deployment to Vercel

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) and click "New Project"

3. Import your GitHub repository

4. Vercel will auto-detect Next.js settings

5. Click "Deploy"

6. Your site will be live at `yourproject.vercel.app`

## Custom Domain (Optional)

In Vercel dashboard:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## Tips for Recruiters

1. **Add real projects** - Replace placeholder projects with your actual work
2. **Include metrics** - Quantify achievements (e.g., "reduced latency by 40%")
3. **Add your photo** - Makes the portfolio more personal
4. **Link to real GitHub** - Make sure your GitHub has active contributions
5. **Add certifications** - Especially GCP certifications in the About section
6. **Keep it updated** - Regular updates show active learning

## Animation Customization

All animations use **Framer Motion**. To customize:

- **Timing**: Adjust `duration` in transition objects
- **Effects**: Change `initial` and `animate` properties
- **Scroll triggers**: Modify `whileInView` and `viewport` settings

Example:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
```

## Color Scheme

Colors are defined in **`src/app/globals.css`**:
- `--primary`: Main accent color (blue)
- `--secondary`: Secondary accent (purple)
- `--accent`: Tertiary accent (cyan)

Change these to match your preferred color scheme.

## Need Help?

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
