# Chidiebere Udegbe — Portfolio (DIST0RTED)

Single-page portfolio. Plain HTML/CSS/JS, no build step.

## Run locally
    python3 -m http.server 8000
Then open http://localhost:8000

## Deploy (GitHub Pages)
1. Create a public repo named `dist0rted777.github.io`.
2. `git remote add origin https://github.com/dist0rted777/dist0rted777.github.io.git`
3. `git push -u origin main`
4. Live at https://dist0rted777.github.io within a minute.

## Filling in assets later
- Videos: in `index.html` A/V section, swap a `.vmedia placeholder` for a YouTube/Vimeo iframe.
- Music: same pattern with SoundCloud/YouTube iframes in the Music section.
- Robot/shuttle images: replace the `.proj-media placeholder` divs with `<img>` tags.
- LinkedIn: set the real URL on `#linkedinBtn` and remove `aria-disabled`.
- CV: add `assets/cv/cv.pdf`, point `#cvBtn` to it, remove `aria-disabled`.
- Skills: adjust tool names in the Skills section to match exactly what you use.
