# Benjamin Feeney - Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS.

## Setup

1. **Create the repository on GitHub**
   - Go to https://github.com/new
   - Name it exactly: `bcfeen.github.io`
   - Make it public
   - Don't initialize with README

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Test locally**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 to see your site

4. **Deploy to GitHub Pages**
   
   First time setup:
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/bcfeen/bcfeen.github.io.git
   
   # Push to main branch
   git branch -M main
   git push -u origin main
   
   # Deploy to gh-pages
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

6. **Wait a few minutes**
   - Your site will be live at https://bcfeen.github.io

## Future Updates

After initial setup, to update your site:
```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push

# Deploy
npm run deploy
```

## Local Development

```bash
npm run dev    # Start dev server
npm run build  # Build for production
npm run preview # Preview production build
```
