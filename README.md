# Portfolio — dist0rted777

Personal portfolio site covering **Audio & Video Production**, **Mechatronics Engineering (CAD / Electrical)**, and **VibeCodings** (AI-assisted app development).

🔗 **Live:** https://dist0rted777.github.io/

## Editing
Plain HTML/CSS/JS — no build step. Edit and push to `main`; GitHub Pages redeploys automatically.

- `index.html` — content. Search for `EDIT:` / `CARD:` comments for where to add your work.
- `style.css` — theme (colors are CSS variables at the top).
- `script.js` — small enhancements (footer year, active nav).

### Common edits
- **Name / tagline:** top of `index.html` (hero section).
- **Showreel:** replace the `.reel` placeholder with a Vimeo/YouTube `<iframe>`.
- **Add a project:** copy any `<article class="card">…</article>` block and change the text + links.
- **Contact links:** the `#contact` section (email, GitHub, Vimeo, GrabCAD, LinkedIn).

## Preview locally
```bash
python3 -m http.server -d . 8000   # then open http://localhost:8000
```
