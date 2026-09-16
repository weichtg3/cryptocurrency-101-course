# GitHub Pages publishing guide

## Required settings

The workflow uses Node 22, builds Docusaurus, uploads the static `build/` directory, and deploys it with GitHub's official Pages actions. Repository **Settings → Pages → Source** must be **GitHub Actions**.

## Repository names

For a project site named `my-crypto-course`, set `projectName: 'my-crypto-course'` and `baseUrl: '/my-crypto-course/'`. For a user site repository exactly `USERNAME.github.io`, set `baseUrl: '/'` and `projectName: 'USERNAME.github.io'`.

## Common failures

- Blank page or missing CSS: `baseUrl` does not match the repository name, including capitalization.
- Navbar GitHub link wrong: replace the username and repository in `docusaurus.config.js`.
- Pages job denied: confirm Pages uses GitHub Actions and that Actions are enabled.
- Broken link build: update/remove the link; internal broken links intentionally fail the build.
- Video removed: replace its URL and duration, then update the module and Start Here table.

## Updating the course

Edit MD/MDX under `docs/`, run `npm run build`, commit, and push to `main`. Deployment runs automatically.
