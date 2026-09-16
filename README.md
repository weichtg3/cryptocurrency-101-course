# Cryptocurrency 101

A complete beginner, security-first cryptocurrency course built with Docusaurus and deployable to GitHub Pages.

## Customize before publishing

Replace every occurrence of `YOUR-GITHUB-USERNAME` in `docusaurus.config.js`. If you use a different repository name, also change `baseUrl` and `projectName`.

## Preview locally

```bash
npm install
npm start
```

## Validate production build

```bash
npm run build
npm run serve
```

## Publish to GitHub

1. Create a new empty public repository named `cryptocurrency-101-course`. Do not initialize it with files.
2. Extract this ZIP and open a terminal in the extracted folder.
3. Replace `YOUR-GITHUB-USERNAME` in `docusaurus.config.js`.
4. Run:

```bash
npm install
npm run build
git init
git add .
git commit -m "Create Cryptocurrency 101 course"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/cryptocurrency-101-course.git
git push -u origin main
```

5. In GitHub, open **Settings → Pages**. Under **Build and deployment**, select **GitHub Actions**.
6. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to succeed.
7. Visit `https://YOUR-GITHUB-USERNAME.github.io/cryptocurrency-101-course/`.

See `PUBLISHING.md` for troubleshooting and custom repository names.
