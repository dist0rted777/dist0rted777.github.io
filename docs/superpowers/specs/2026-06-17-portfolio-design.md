# Portfolio Design Spec — Chidiebere Udegbe (DIST0RTED)

**Date:** 2026-06-17
**Owner:** Chidiebere Udegbe
**Status:** Approved design — ready for implementation planning

---

## 1. Purpose & goals

A single personal portfolio website to support job applications across four target fields: **Audio/Video, Electrical, CAD, and Game Development**, with **AI** as a cross-cutting strength. The site must:

- Present Chidiebere as a **Mechatronics Engineer & Creative** — one unified, memorable cross-disciplinary identity.
- Make a focused (early-career, growing) body of work look **full and intentional**, not sparse.
- Allow **targeted applications** via deep-linkable sections (e.g. send the A/V section link for an A/V role).
- Be free to host, easy to maintain, and easy to grow.

### Non-goals (YAGNI)
- No separate per-discipline portfolios (would fragment the story and look empty given current volume).
- No CMS, framework, or build tooling.
- No dedicated DIST0RTED music site yet — that is an optional **phase 2** spin-off that would link back to this portfolio.

---

## 2. Identity & positioning

- **Professional name:** Chidiebere Udegbe
- **Creative handle:** DIST0RTED (used for the music/producer identity)
- **Positioning:** Engineering-led (mechatronics: robot, autonomous shuttle, AI/autonomy) with a strong creative second act (video + music). AI is woven through all sections, not siloed.
- **Status:** Mechatronics engineer. Global / open to remote.

---

## 3. Visual system — "Bold Editorial"

- **Background:** off-white `#faf9f6`
- **Text:** near-black `#111`
- **Accent:** burnt orange `#c2410c` (single accent; swappable)
- **Type:** large, confident sans-serif headings; generous whitespace; large project imagery; magazine-like hierarchy.
- **Motion:** subtle fade/slide-in on scroll. Fast, accessible (respects `prefers-reduced-motion`), mobile-first responsive.

---

## 4. Content inventory (source material)

**Audio/Video**
- Opening edit for a basketball competition event
- Advert for the school's new juice drink
- Music video(s) for own tracks

**Music (DIST0RTED)**
- 20+ beats / mixtapes produced

**Engineering — CAD + Electrical (mechatronics core)**
- **Flagship:** 4-wheeled differential-drive robot — CAD design, electrical schematics, fully built and working (final-year project)
- Autonomous solar-powered shuttle proposal — 3D model + schematics, under school review

**Game Dev**
- Unreal Engine 3D multiplayer game (high-school; real hands-on experience, limited by old PC hardware)
- Learning Unreal for virtual production / video (not yet practiced)

**AI (cross-cutting, all four areas)**
- Robotics/autonomy AI (computer vision, sensor fusion, path planning, control, navigation)
- ML / data / coding (Python, model training, data analysis)
- Generative / creative AI (music, video, image)
- AI app building (LLM apps, agents, API integrations)

---

## 5. Site structure

Single scrolling page with a sticky top nav. Every section has a stable anchor id for deep-linking targeted applications.

1. **Hero** — name, one-line positioning, "View Work" + "Contact" buttons, cropped headshot (`MyPic.jpeg`).
2. **About** `#about` — 2–3 short paragraphs: mechatronics engineer who builds working systems *and* produces media; tagline "Mechatronics engineer, Global / open to remote."
3. **Engineering** `#engineering` — flagship section:
   - Differential-drive robot (CAD + schematics + built & working) — the star.
   - Autonomous solar shuttle (3D model + schematics, under review).
   - Each card: hero image/render, the problem, role, tools, AI/autonomy angle.
4. **Audio / Video** `#audio-video` — embedded players (YouTube/Vimeo): basketball opener, juice advert, music video(s).
5. **Music** `#music` — DIST0RTED: embedded SoundCloud/YouTube players; "20+ tracks produced."
6. **Game Dev** `#game-dev` — honest capability framing: Unreal multiplayer prototype experience, virtual-production interest. Not a fake gallery.
7. **AI & Skills** `#skills` — skills grid grouped by area (Engineering/CAD, Electronics, AI & Autonomy, A/V, Music, Game Dev, Tools), with the AI cluster visually highlighted.
8. **Contact** `#contact` — email `audegbe2003@gmail.com`, GitHub `dist0rted777`, LinkedIn (URL TBD from user), "Download CV" button (PDF TBD from user). Footer.

**Nav:** sticky top bar with anchor links to each section. Example targeted link: `dist0rted777.github.io/#audio-video`.

---

## 6. Technical approach

- Hand-coded **HTML + CSS + vanilla JS**. No framework, no build step.
- Single `index.html` (sections may be split into partials only if it aids maintainability during build).
- Assets in a local `assets/` folder (images, CV PDF); media embeds via iframe (YouTube/Vimeo/SoundCloud).
- **Hosting:** GitHub Pages via a repo named `dist0rted777.github.io` → live at that URL. Custom domain addable later.
- Accessibility: semantic HTML, alt text, keyboard-navigable, reduced-motion support.

---

## 7. Build strategy — placeholders first

Build the entire site working, using placeholders wherever real assets are missing, then drop in real links/images as the user gathers them. Nothing blocks the build.

### Assets needed from user (can come in incrementally)
- Video links (YouTube/Vimeo/Drive) for the 3 videos.
- SoundCloud/YouTube links for a few beats/tracks.
- Photos/renders of the robot (phone photos of the built robot are valuable) and the shuttle model/schematics.
- LinkedIn profile URL.
- Resume/CV PDF.
- (Optional) a cleaner crop/version of the headshot.

### Already on hand
- Headshot: `MyPic.jpeg`
- Email: `audegbe2003@gmail.com`
- GitHub: `dist0rted777`

---

## 8. Success criteria

- Loads fast, looks polished and intentional on mobile and desktop.
- Engineering flagship (robot) is the clear visual centerpiece.
- A recruiter in any one field can reach the relevant section in one click and see focused, well-presented work.
- The cross-disciplinary + AI story is immediately clear from the hero and About.
- Deployable to `dist0rted777.github.io` with placeholders, then incrementally filled with real assets.

---

## 9. Future / phase 2 (out of scope now)

- Optional dedicated DIST0RTED music page (links back to portfolio).
- Custom domain.
- Blog / project deep-dive pages as the body of work grows.
