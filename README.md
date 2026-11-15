# Origo Games — GitHub Pages starter

A responsive, bilingual (English/Spanish) corporate-gaming landing page for Origo Games and Origo Game Group.

## Files
- `index.html` — page structure and content
- `style.css` — responsive dark visual system
- `script.js` — language switcher, mobile navigation and application email flow
- `assets/origo-mark.svg` — original geometric logo mark

## Before publishing
1. Open `script.js`.
2. Set `CONTACT_EMAIL` to an email address controlled by Origo Games, for example:
   `const CONTACT_EMAIL = "contact@your-real-domain.com";`
3. Replace any draft copy and add verified member/project information when available.
4. The application form uses the visitor's email application (`mailto:`). It does not store submissions or send them to a server. For a fully online form, connect a form provider or your own backend before launch.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new **public** repository, for example `origo-games`.
2. Upload the contents of this folder to the repository root. Make sure `index.html` is at the top level, not inside another nested folder.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then press **Save**.
6. Wait for GitHub Pages to finish deploying. The site URL will appear in the Pages settings, usually:
   `https://YOUR-USERNAME.github.io/origo-games/`

If you want the site at `https://YOUR-USERNAME.github.io/`, name the repository exactly `YOUR-USERNAME.github.io`.

## Logo and brand direction
The starter logo is an original geometric “O / origin” mark. Palette:
- Midnight: `#0b0d14`
- Electric violet: `#8c7bff`
- Soft violet: `#b5aaff`
- Steel: `#a0a7b8`
- White: `#f2f3f8`

Typography: Space Grotesk for headings, DM Sans for body text (Google Fonts; system fallbacks remain available).

## Notes
- No build step, framework or package installation is required.
- GitHub Pages serves this static site directly.
- Update title, description and social metadata in `index.html` before public launch if needed.
