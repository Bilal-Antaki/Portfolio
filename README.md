# Bilal Antaki - Portfolio Website

Professional portfolio website showcasing robotics engineering projects and expertise.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages
- **Domain**: bilal-antaki.com

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── projects/          # Individual project pages
│       ├── robotic-cat/
│       ├── cansat-avionics/
│       └── medical-uav/
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Publications.tsx
│   ├── Contact.tsx
│   └── ProjectCard.tsx
├── data/                  # Data files
│   ├── projects.ts
│   ├── skills.ts
│   └── publications.ts
├── public/               # Static assets
│   ├── images/
│   ├── cv/
│   └── CNAME
└── next.config.ts        # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ (installed via nvm)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd "/home/bilal/Portfolio Website"
```

2. Install dependencies:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the static site:

```bash
npm run build
```

This creates an `out/` directory with the static site.

## Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository named `bilal-antaki.github.io` (or any name you prefer)
   - Do NOT initialize with README (we already have files)

2. **Initialize Git and Push**:
```bash
cd "/home/bilal/Portfolio Website"
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Under "Source", select the branch to deploy from (usually `gh-pages`)
   - Wait for GitHub to build and deploy your site

### Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the site
npm run build

# The output is in the 'out' directory
# You can use gh-pages package for easy deployment:
npm install -g gh-pages

# Deploy to gh-pages branch
gh-pages -d out
```

## Custom Domain Setup (bilal-antaki.com)

1. **In your domain registrar** (e.g., Namecheap, GoDaddy):
   - Add the following DNS records:

   ```
   Type: A
   Host: @
   Value: 185.199.108.153

   Type: A
   Host: @
   Value: 185.199.109.153

   Type: A
   Host: @
   Value: 185.199.110.153

   Type: A
   Host: @
   Value: 185.199.111.153

   Type: CNAME
   Host: www
   Value: YOUR_USERNAME.github.io
   ```

2. **In GitHub Repository Settings**:
   - Go to Settings → Pages
   - Under "Custom domain", enter `bilal-antaki.com`
   - Enable "Enforce HTTPS" (wait for DNS to propagate first)

3. **Verify CNAME file**:
   - The `public/CNAME` file contains your domain
   - This file will be included in the build output

## Adding Content

### Adding New Projects

Edit `data/projects.ts` and add a new project object to the array.

Create a new page in `app/projects/[project-id]/page.tsx`.

### Adding Publications

Edit `data/publications.ts` and add publication details.

### Updating Skills

Edit `data/skills.ts` to modify or add new skill categories.

### Adding Images

Place images in:
- `public/images/projects/` for project images
- `public/images/` for profile photo

### Adding Your CV

Place your PDF CV in `public/cv/Bilal_Antaki_CV.pdf`.

### Adding Vimeo Videos

1. Upload your video to Vimeo
2. Get the embed URL (looks like: `https://player.vimeo.com/video/123456789`)
3. Add the URL to the project's `vimeoUrl` field in `data/projects.ts`

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:
- Primary colors are set to professional blue tones
- Adjust the values to match your preferences

### Fonts

The site uses Inter font. To change:
- Edit `app/layout.tsx`
- Import a different Google Font

### Animations

Animations are configured in:
- `tailwind.config.ts` for CSS animations
- Components use Framer Motion for complex animations

## Maintenance

### Updating Dependencies

```bash
npm update
npm audit fix
```

### Troubleshooting Build Issues

If you encounter build errors:

1. Clear the cache:
```bash
rm -rf .next out node_modules
npm install
npm run build
```

2. Check for TypeScript errors:
```bash
npm run build
```

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Contact: bilal.antaki.1@gmail.com

## License

© 2026 Bilal Antaki. All rights reserved.
