# Suggested commit sequence

Copy-paste these in order when setting up the GitHub repo:

```bash
git init
git add .
git commit -m "feat: initial portfolio setup with React + Vite + TailwindCSS"

# After tweaking hero section:
git add src/sections/Hero.jsx
git commit -m "feat: add hero section with photo and animated badges"

# After contact form:
git add src/sections/Contact.jsx api/contact.js
git commit -m "feat: add contact form with Nodemailer serverless API"

# After mobile fixes:
git add src/index.css src/components/Navbar.jsx
git commit -m "fix: improve mobile responsiveness and navbar drawer"

# After content updates:
git add src/sections/Projects.jsx src/sections/About.jsx
git commit -m "content: update projects and bio with real data"

# After meta/favicon:
git add index.html
git commit -m "chore: add favicon, title, og meta tags"

# Final:
git add README.md vercel.json
git commit -m "docs: update README with deploy instructions and AI tools log"
```
