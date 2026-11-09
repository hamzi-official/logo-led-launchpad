# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Free GitHub Pages deployment

Connect this repository to GitHub, then choose **Settings → Pages → Source → GitHub Actions**. Push to `main` or run the deployment workflow manually. `npm run build:pages` creates a client-only React site in `dist`, using TanStack hash navigation (`/#/contact`) and relative asset paths. No server, keys, or database are needed on GitHub Pages. The Lovable preview retains its supported TanStack Start setup.

The workflow downloads the saved photography into its artifact and creates `404.html` and `.nojekyll`. All pages reuse the same source. Add a custom domain through GitHub Pages settings if wanted; registration is not free. Deployment requires repository access and Pages enabled; creating the workflow alone does not publish the site.

Security: the static HTML includes a CSP and referrer policy. `X-Content-Type-Options: nosniff` must be an HTTP response header; a meta tag cannot enforce it, and GitHub Pages does not support custom response headers. Client-side validation, a honeypot, and a 30-second cooldown discourage accidental/bot submissions but cannot provide tamper-proof server-side spam protection. Quote buttons open a draft, not a confirmed sent message. Privacy text must be reviewed against the company's actual retention and service practices before publication.
