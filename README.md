# Muhammad Tayyab — Portfolio

A responsive personal portfolio built with semantic HTML, modern CSS, and lightweight JavaScript. No frontend framework or build step is required.

## Run locally

Open `index.html` in a browser, or serve the folder with a local static server. Google Fonts are loaded remotely; the layout and content remain usable if that request fails.

## Structure

- `index.html` — portfolio content and semantic page structure
- `styles.css` — responsive design system, layouts, and reduced-motion support
- `script.js` — mobile navigation, current year, and small reveal interactions
- `assets/favicon.svg` — site icon
- `assets/og-cover.svg` — social sharing image
- `articles/` — longer-form writing
- `send-email.php` — legacy PHP contact endpoint (not used by the current mailto contact CTA)

## Design and accessibility

The site uses a warm neutral palette, forest-green surfaces, restrained coral accents, responsive grids, visible keyboard focus, a skip link, semantic landmarks, and a reduced-motion fallback. Project illustrations are built with CSS so the main experience does not depend on large stock images.

## Contact endpoint configuration

The current portfolio links directly to email. If you choose to enable the legacy PHP endpoint on a PHP host, configure SMTP credentials as server environment variables. Never commit credentials:

- `PORTFOLIO_SMTP_HOST` (default: smtp.gmail.com)
- `PORTFOLIO_SMTP_PORT` (default: 587)
- `PORTFOLIO_SMTP_USER`
- `PORTFOLIO_SMTP_PASS`
- `PORTFOLIO_CONTACT_TO` (default: c2muhammadtayyab@gmail.com)

The endpoint expects PHPMailer, either through `vendor/autoload.php` or the existing `PHPMailer/src/` folder. Configure secrets in the hosting environment, not in PHP source code or a public repository.

## Before publishing

- Confirm the project descriptions and technology lists reflect the current state of each project.
- Add public demo links only when a project is actually available.
- Review social profile links and article dates.
- Configure a custom domain and HTTPS if deploying.
