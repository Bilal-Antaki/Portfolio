# Quick Start Guide

## Running the Development Server

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
cd "/home/bilal/Portfolio Website"
npm run dev
```

Visit http://localhost:3000 to see your portfolio.

## Building for Production

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
cd "/home/bilal/Portfolio Website"
npm run build
```

The static site will be generated in the `out/` directory.

## Next Steps

### 1. Add Your Content

- **Profile Photo**: Add to `public/images/profile.jpg`
- **Project Images**: Add to `public/images/projects/`
- **CV**: Add to `public/cv/Bilal_Antaki_CV.pdf`
- **Vimeo Videos**: Update `vimeoUrl` in [data/projects.ts](data/projects.ts)
- **Publications**: Add to [data/publications.ts](data/publications.ts)

### 2. Deploy to GitHub

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Portfolio website"

# Create a repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from a branch → select `gh-pages`
4. The GitHub Action will automatically deploy on every push to main

### 4. Configure Custom Domain

1. In your domain registrar, add these DNS records:
   - Type A: `185.199.108.153`
   - Type A: `185.199.109.153`
   - Type A: `185.199.110.153`
   - Type A: `185.199.111.153`
   - Type CNAME: www → YOUR_USERNAME.github.io

2. In GitHub: Settings → Pages → Custom domain: `bilal-antaki.com`

## Key Files to Edit

- [data/projects.ts](data/projects.ts) - Your project information
- [data/skills.ts](data/skills.ts) - Your skills and technologies
- [data/publications.ts](data/publications.ts) - Your publications
- [components/About.tsx](components/About.tsx) - About section content
- [tailwind.config.ts](tailwind.config.ts) - Color scheme and styling

## Troubleshooting

If you get Node.js errors, make sure to load nvm:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

For detailed instructions, see [README.md](README.md)
