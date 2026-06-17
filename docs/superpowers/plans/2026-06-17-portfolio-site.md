# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a single-page "Bold Editorial" portfolio site for Chidiebere Udegbe (DIST0RTED), positioned as a mechatronics engineer & creative, with placeholders for assets to be supplied later.

**Architecture:** Hand-coded static site — one `index.html` with anchor-linked sections, one CSS file implementing a Bold Editorial design system, one vanilla-JS file for sticky nav + mobile menu + on-scroll reveal. Assets live in `assets/`. Hosted free on GitHub Pages via a `dist0rted777.github.io` repo.

**Tech Stack:** HTML5, CSS3 (custom properties, fl/grid, `prefers-reduced-motion`), vanilla JavaScript (IntersectionObserver), Git + GitHub Pages.

**Verification model:** No unit tests — this is a static design artifact. Each task is verified by opening `index.html` in a browser (or `python3 -m http.server`) and visually confirming the described result, then committing.

**Design tokens (use everywhere):**
- `--bg: #faf9f6` · `--ink: #111111` · `--muted: #555555` · `--line: #e5e3dc`
- `--accent: #c2410c` · `--accent-soft: #f5e9e2`
- Font: system sans stack for headings/body: `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`; optional Google "Inter" added in Task 2.
- Max content width `1080px`; section vertical padding `clamp(64px, 10vw, 120px)`.

**Confirmed content facts (do not invent beyond these):**
- Name: Chidiebere Udegbe · Handle: DIST0RTED
- Status tagline: "Mechatronics engineer · Global / open to remote"
- Email: `audegbe2003@gmail.com` · GitHub: `dist0rted777`
- LinkedIn URL: PLACEHOLDER (user supplies) · CV PDF: PLACEHOLDER (user supplies)
- Headshot on hand: `MyPic.jpeg` (portrait phone photo)
- Engineering: differential-drive robot (CAD + schematics + built & working); autonomous solar-powered shuttle (3D model + schematics, under review)
- A/V: basketball event opener, juice-drink advert, music video(s) — links PLACEHOLDER
- Music: 20+ beats/mixtapes (DIST0RTED) — links PLACEHOLDER
- Game Dev: Unreal multiplayer prototype experience; virtual production interest (capability, not gallery)
- AI: robotics/autonomy, ML/data/coding, generative/creative, AI app building

Wherever an asset/link is unknown, render a clearly-styled **placeholder block** (see Task 3 `.placeholder` pattern) — never a broken embed.

---

## File Structure

- Create: `index.html` — all sections, semantic markup, anchors
- Create: `assets/css/styles.css` — design system + all section styles
- Create: `assets/js/main.js` — sticky nav state, mobile menu toggle, scroll reveal
- Create: `assets/img/headshot.jpg` — cropped square version of `MyPic.jpeg`
- Create: `assets/img/.gitkeep` — holds project image placeholders
- Create: `assets/cv/placeholder.txt` — note that CV PDF goes here
- Create: `README.md` — what the site is + how to run/deploy + asset checklist
- Create: `.gitignore` — ignore `.superpowers/` and OS cruft
- Keep: `MyPic.jpeg`, `JObs.png` (JObs.png is reference only; not shipped — see Task 1 note)

Each section of `index.html` is a `<section id="…">` so it is independently deep-linkable.

---

## Task 1: Project scaffold, git, gitignore

**Files:**
- Create: `.gitignore`
- Create: `assets/img/.gitkeep`, `assets/css/`, `assets/js/`, `assets/cv/placeholder.txt`

- [ ] **Step 1: Create folder structure**

Run:
```bash
cd /home/dist0rted/Documents/MyPortfolio
mkdir -p assets/css assets/js assets/img assets/cv
touch assets/img/.gitkeep
```

- [ ] **Step 2: Write `.gitignore`**

```
.superpowers/
.DS_Store
Thumbs.db
*.log
```

- [ ] **Step 3: Write `assets/cv/placeholder.txt`**

```
Drop the CV here as cv.pdf — the "Download CV" button links to assets/cv/cv.pdf.
Until then the button shows a "coming soon" state (see index.html contact section).
```

- [ ] **Step 4: Initialize git and first commit**

```bash
cd /home/dist0rted/Documents/MyPortfolio
git init
git add .gitignore assets/img/.gitkeep assets/cv/placeholder.txt
git commit -m "chore: scaffold portfolio project structure"
```

Expected: repo initialized, one commit. `JObs.png`/`MyPic.jpeg` remain untracked for now (handled in Task 9).

---

## Task 2: CSS design system (base + tokens + nav + utilities)

**Files:**
- Create: `assets/css/styles.css`

- [ ] **Step 1: Write the base stylesheet**

```css
/* ===== Tokens ===== */
:root{
  --bg:#faf9f6; --ink:#111; --muted:#555; --line:#e5e3dc;
  --accent:#c2410c; --accent-soft:#f5e9e2;
  --maxw:1080px; --pad:clamp(64px,10vw,120px);
  --font:"Inter",-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:72px}
body{background:var(--bg);color:var(--ink);font-family:var(--font);
  line-height:1.6;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.container{max-width:var(--maxw);margin:0 auto;padding:0 24px}
section{padding:var(--pad) 0}
h1,h2,h3{line-height:1.05;font-weight:800;letter-spacing:-0.02em}
h2{font-size:clamp(28px,5vw,46px);margin-bottom:8px}
.eyebrow{font-size:12px;letter-spacing:3px;text-transform:uppercase;
  color:var(--accent);font-weight:700;margin-bottom:14px}
.lead{color:var(--muted);font-size:clamp(15px,2vw,18px);max-width:60ch}
.btn{display:inline-block;padding:12px 22px;font-weight:700;font-size:14px;
  letter-spacing:.5px;border-radius:6px;transition:transform .15s,opacity .15s}
.btn:hover{transform:translateY(-2px)}
.btn-primary{background:var(--ink);color:#fff}
.btn-outline{border:1.5px solid var(--ink)}
.btn[aria-disabled="true"]{opacity:.45;pointer-events:none}
.placeholder{border:1.5px dashed var(--line);border-radius:10px;
  background:repeating-linear-gradient(45deg,#fff,#fff 12px,#faf7f2 12px,#faf7f2 24px);
  color:var(--muted);display:flex;align-items:center;justify-content:center;
  text-align:center;padding:28px;min-height:200px;font-size:14px}

/* ===== Nav ===== */
.nav{position:fixed;top:0;left:0;right:0;z-index:50;
  background:rgba(250,249,246,.85);backdrop-filter:blur(10px);
  border-bottom:1px solid transparent;transition:border-color .2s}
.nav.scrolled{border-color:var(--line)}
.nav .container{display:flex;align-items:center;justify-content:space-between;height:64px}
.nav .brand{font-weight:800;letter-spacing:-0.02em}
.nav .brand small{color:var(--accent);font-weight:700}
.nav ul{display:flex;gap:24px;list-style:none}
.nav a{font-size:14px;font-weight:600;color:var(--muted)}
.nav a:hover{color:var(--ink)}
.nav-toggle{display:none;background:none;border:0;font-size:24px;cursor:pointer}
@media(max-width:760px){
  .nav ul{position:fixed;inset:64px 0 auto 0;flex-direction:column;gap:0;
    background:var(--bg);border-bottom:1px solid var(--line);
    transform:translateY(-120%);transition:transform .25s}
  .nav ul.open{transform:translateY(0)}
  .nav ul li{border-top:1px solid var(--line)}
  .nav ul a{display:block;padding:16px 24px}
  .nav-toggle{display:block}
}

/* ===== Reveal animation ===== */
.reveal{opacity:0;transform:translateY(24px);transition:opacity .6s,transform .6s}
.reveal.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .reveal{opacity:1;transform:none;transition:none}
  .btn:hover{transform:none}
}
```

- [ ] **Step 2: Add the Inter web font import at the very top of the file**

Prepend this line above `/* ===== Tokens ===== */`:
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap");
```

- [ ] **Step 3: Commit**

```bash
git add assets/css/styles.css
git commit -m "feat: add Bold Editorial design system and nav styles"
```

---

## Task 3: HTML skeleton, head, nav, hero

**Files:**
- Create: `index.html`

- [ ] **Step 1: Write the document head, nav, and hero**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Chidiebere Udegbe — Mechatronics Engineer & Creative</title>
<meta name="description" content="Chidiebere Udegbe (DIST0RTED) — mechatronics engineer and creative. Robotics, electronics, AI, video and music. Global, open to remote.">
<meta property="og:title" content="Chidiebere Udegbe — Mechatronics Engineer & Creative">
<meta property="og:description" content="Robotics, electronics, AI, video and music. Global, open to remote.">
<meta property="og:type" content="website">
<link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>

<nav class="nav" id="nav">
  <div class="container">
    <a class="brand" href="#top">Chidiebere Udegbe <small>· DIST0RTED</small></a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">☰</button>
    <ul id="navMenu">
      <li><a href="#engineering">Engineering</a></li>
      <li><a href="#audio-video">Audio/Video</a></li>
      <li><a href="#music">Music</a></li>
      <li><a href="#game-dev">Game Dev</a></li>
      <li><a href="#skills">AI &amp; Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

<header id="top" class="hero">
  <div class="container hero-grid">
    <div class="reveal">
      <p class="eyebrow">Mechatronics Engineer &amp; Creative</p>
      <h1>Building things<br>that <em>move.</em></h1>
      <p class="lead">I design and build working robots and autonomous systems — and produce
      the video and music to match. Mechatronics engineer · Global / open to remote.</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="#engineering">View Work</a>
        <a class="btn btn-outline" href="#contact">Get in Touch</a>
      </div>
    </div>
    <div class="hero-photo reveal">
      <img src="assets/img/headshot.jpg" alt="Portrait of Chidiebere Udegbe" width="360" height="360">
    </div>
  </div>
</header>
```

- [ ] **Step 2: Append hero CSS to `assets/css/styles.css`**

```css
.hero{padding-top:140px}
.hero-grid{display:grid;grid-template-columns:1.3fr .9fr;gap:48px;align-items:center}
.hero h1{font-size:clamp(40px,8vw,76px);margin:6px 0 18px}
.hero h1 em{color:var(--accent);font-style:italic}
.hero-cta{display:flex;gap:14px;margin-top:28px;flex-wrap:wrap}
.hero-photo img{border-radius:14px;object-fit:cover;aspect-ratio:1;width:100%;
  box-shadow:0 20px 50px rgba(0,0,0,.12)}
@media(max-width:760px){.hero-grid{grid-template-columns:1fr}.hero-photo{order:-1;max-width:220px}}
```

- [ ] **Step 3: Verify in browser**

Run: `cd /home/dist0rted/Documents/MyPortfolio && python3 -m http.server 8000`
Open `http://localhost:8000`. Expected: fixed nav, hero headline "Building things that move." with orange "move.", two buttons, headshot placeholder area (image 404s until Task 9 — acceptable now). Stop server with Ctrl-C.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add document head, sticky nav, and hero section"
```

---

## Task 4: About section

**Files:**
- Modify: `index.html` (append after `</header>`)
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Append About markup**

```html
<section id="about">
  <div class="container reveal">
    <p class="eyebrow">About</p>
    <h2>Engineer by training, creative by instinct.</h2>
    <div class="about-body">
      <p class="lead">I'm Chidiebere Udegbe — a mechatronics engineer who likes working where
      hardware, software and intelligence meet. I've designed and built a fully working
      differential-drive robot from CAD and schematics up, and I'm developing an autonomous,
      solar-powered shuttle concept now under review at my school.</p>
      <p class="lead">Away from the bench I'm <strong>DIST0RTED</strong> — a music producer and
      video editor with 20+ tracks and a run of event, advert and music-video work. The same
      discipline that debugs a control loop shapes a clean edit or a tight mix.</p>
      <p class="lead">Based globally and open to remote work across engineering, AI, audio/video
      and game development.</p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append About CSS**

```css
#about .about-body{display:grid;gap:18px;margin-top:18px;max-width:760px}
```

- [ ] **Step 3: Verify** — reload `http://localhost:8000`; About reads cleanly below hero.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add About section"
```

---

## Task 5: Engineering section (flagship)

**Files:**
- Modify: `index.html`, `assets/css/styles.css`

- [ ] **Step 1: Append Engineering markup**

```html
<section id="engineering">
  <div class="container">
    <div class="reveal">
      <p class="eyebrow">Engineering · CAD · Electronics</p>
      <h2>Systems I designed and built.</h2>
      <p class="lead">From mechanical CAD to electrical schematics to the autonomy that runs them.</p>
    </div>
    <div class="proj-grid">

      <article class="proj reveal">
        <div class="proj-media placeholder">Robot photo / render — coming soon</div>
        <div class="proj-info">
          <span class="tag">Flagship · Built &amp; working</span>
          <h3>4-Wheeled Differential-Drive Robot</h3>
          <p>Final-year project: full mechanical CAD, custom electrical schematics, and a working
          build. Drive control, power electronics and sensing integrated into one tested platform.</p>
          <ul class="meta"><li>CAD design</li><li>Electrical schematics</li><li>Motor &amp; power control</li><li>Autonomy / control</li></ul>
        </div>
      </article>

      <article class="proj reveal">
        <div class="proj-media placeholder">Shuttle 3D model — coming soon</div>
        <div class="proj-info">
          <span class="tag">Concept · Under review</span>
          <h3>Autonomous Solar-Powered Shuttle</h3>
          <p>A proposal for a fully autonomous, solar-powered campus shuttle: 3D model and electrical
          schematics designed end-to-end, currently under review by my school.</p>
          <ul class="meta"><li>3D modeling</li><li>Schematics</li><li>Solar power system</li><li>Autonomy</li></ul>
        </div>
      </article>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Append Engineering CSS**

```css
.proj-grid{display:grid;gap:28px;margin-top:36px}
.proj{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:center;
  border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff}
.proj:nth-child(even) .proj-media{order:2}
.proj-media{min-height:260px;height:100%}
.proj-info{padding:28px}
.proj .tag{display:inline-block;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;
  font-weight:700;color:var(--accent);background:var(--accent-soft);
  padding:5px 10px;border-radius:999px;margin-bottom:12px}
.proj h3{font-size:24px;margin-bottom:10px}
.proj p{color:var(--muted)}
.meta{list-style:none;display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.meta li{font-size:12px;font-weight:600;border:1px solid var(--line);padding:5px 10px;border-radius:6px}
@media(max-width:760px){.proj{grid-template-columns:1fr}.proj:nth-child(even) .proj-media{order:0}}
```

- [ ] **Step 3: Verify** — two project cards alternate image/text sides on desktop, stack on mobile.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add Engineering flagship section"
```

---

## Task 6: Audio/Video section

**Files:**
- Modify: `index.html`, `assets/css/styles.css`

- [ ] **Step 1: Append A/V markup** (placeholder cards; swap each `.placeholder` for a 16:9 iframe when links arrive)

```html
<section id="audio-video">
  <div class="container">
    <div class="reveal">
      <p class="eyebrow">Audio / Video</p>
      <h2>Edits, adverts &amp; films.</h2>
      <p class="lead">Event openers, brand adverts and music videos — edited and produced end to end.</p>
    </div>
    <div class="card-grid reveal">
      <div class="vcard">
        <div class="vmedia placeholder">Basketball event opener — video coming soon</div>
        <div class="vbody"><h3>Basketball Event Opener</h3><p>Opening edit for a basketball competition event.</p></div>
      </div>
      <div class="vcard">
        <div class="vmedia placeholder">Juice-drink advert — video coming soon</div>
        <div class="vbody"><h3>Juice Drink Advert</h3><p>Promo advert for a school's new juice drink launch.</p></div>
      </div>
      <div class="vcard">
        <div class="vmedia placeholder">Music video — coming soon</div>
        <div class="vbody"><h3>Music Video</h3><p>Music video for an original DIST0RTED track.</p></div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append A/V + shared card-grid CSS**

```css
.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:36px}
.vcard{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff}
.vmedia{aspect-ratio:16/9}
.vmedia iframe{width:100%;height:100%;border:0;display:block}
.vbody{padding:18px}
.vbody h3{font-size:18px;margin-bottom:6px}
.vbody p{color:var(--muted);font-size:14px}
```

- [ ] **Step 3: Document the embed swap (add HTML comment above the A/V card-grid)**

```html
<!-- To publish a video: replace its <div class="vmedia placeholder">…</div> with:
     <div class="vmedia"><iframe src="https://www.youtube.com/embed/VIDEO_ID"
     title="…" allowfullscreen loading="lazy"></iframe></div> -->
```

- [ ] **Step 4: Verify** — three 16:9 placeholder cards in a responsive grid.

- [ ] **Step 5: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add Audio/Video section with embed placeholders"
```

---

## Task 7: Music section (DIST0RTED)

**Files:**
- Modify: `index.html`, `assets/css/styles.css`

- [ ] **Step 1: Append Music markup**

```html
<section id="music">
  <div class="container">
    <div class="reveal">
      <p class="eyebrow">Music · DIST0RTED</p>
      <h2>20+ tracks produced.</h2>
      <p class="lead">Beats and mixtapes produced under the name DIST0RTED. Players go live as I
      publish the catalogue.</p>
    </div>
    <div class="card-grid reveal">
      <div class="vcard"><div class="vmedia placeholder">SoundCloud / YouTube player — coming soon</div>
        <div class="vbody"><h3>Selected Beats</h3><p>A rotating set of original instrumentals.</p></div></div>
      <div class="vcard"><div class="vmedia placeholder">Mixtape player — coming soon</div>
        <div class="vbody"><h3>Mixtape</h3><p>Full project / mixtape stream.</p></div></div>
    </div>
    <!-- To publish music: replace a placeholder with a SoundCloud or YouTube iframe, same pattern as A/V. -->
  </div>
</section>
```

- [ ] **Step 2: Verify** — reuses `.card-grid`/`.vcard`; two placeholder players appear. No new CSS needed.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add Music (DIST0RTED) section"
```

---

## Task 8: Game Dev section (capability framing)

**Files:**
- Modify: `index.html`, `assets/css/styles.css`

- [ ] **Step 1: Append Game Dev markup**

```html
<section id="game-dev">
  <div class="container reveal">
    <p class="eyebrow">Game Development</p>
    <h2>Real engine experience, growing fast.</h2>
    <p class="lead">Hands-on Unreal Engine work — and an active push into virtual production.</p>
    <div class="gd-grid">
      <div class="gd-item"><h3>Unreal Engine</h3><p>Built a 3D multiplayer game prototype in
        Unreal during high school — hands-on with gameplay, networking and 3D scenes.</p></div>
      <div class="gd-item"><h3>Virtual Production</h3><p>Currently learning Unreal for
        virtual production and real-time video — bridging my engine and video/editing skills.</p></div>
    </div>
    <p class="note">Presented as capability rather than a finished-game gallery — playable projects
    will be added here as they ship.</p>
  </div>
</section>
```

- [ ] **Step 2: Append Game Dev CSS**

```css
.gd-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;margin:30px 0 18px}
.gd-item{border-left:3px solid var(--accent);padding:6px 0 6px 18px}
.gd-item h3{font-size:19px;margin-bottom:8px}
.gd-item p{color:var(--muted)}
.note{font-size:13px;color:var(--muted);font-style:italic}
```

- [ ] **Step 3: Verify** — two accent-barred capability blocks, honest framing note below.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add Game Dev capability section"
```

---

## Task 9: AI & Skills section

**Files:**
- Modify: `index.html`, `assets/css/styles.css`

- [ ] **Step 1: Append AI & Skills markup** (AI group visually highlighted via `.skillcard.hl`)

```html
<section id="skills">
  <div class="container">
    <div class="reveal">
      <p class="eyebrow">AI &amp; Skills</p>
      <h2>What I bring to the bench.</h2>
      <p class="lead">AI runs through everything I do — autonomy in hardware, intelligence in tools,
      and generative power in media.</p>
    </div>
    <div class="skill-grid reveal">
      <div class="skillcard hl"><h3>AI &amp; Autonomy</h3><ul>
        <li>Computer vision</li><li>Sensor fusion</li><li>Path planning &amp; control</li>
        <li>ML / model training (Python)</li><li>LLM app &amp; agent building</li>
        <li>Generative AI for media</li></ul></div>
      <div class="skillcard"><h3>Engineering &amp; CAD</h3><ul>
        <li>3D mechanical CAD</li><li>3D modeling &amp; renders</li><li>Prototyping</li>
        <li>3D printing</li></ul></div>
      <div class="skillcard"><h3>Electronics</h3><ul>
        <li>Circuit &amp; schematic design</li><li>Microcontrollers / embedded</li>
        <li>Sensors &amp; motor control</li><li>Solar / power systems</li></ul></div>
      <div class="skillcard"><h3>Audio / Video</h3><ul>
        <li>Video editing</li><li>Advert &amp; event production</li><li>Motion / color</li>
        <li>Sound design</li></ul></div>
      <div class="skillcard"><h3>Music · DIST0RTED</h3><ul>
        <li>Beat production</li><li>Mixing</li><li>Music-video direction</li></ul></div>
      <div class="skillcard"><h3>Game Dev &amp; Tools</h3><ul>
        <li>Unreal Engine</li><li>Virtual production (learning)</li><li>Python</li>
        <li>Git / GitHub</li></ul></div>
    </div>
    <!-- Tweak specific tool names above to match exactly what you use (e.g. Fusion 360, KiCad, Premiere, FL Studio). -->
  </div>
</section>
```

- [ ] **Step 2: Append Skills CSS**

```css
.skill-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;margin-top:36px}
.skillcard{border:1px solid var(--line);border-radius:12px;padding:22px;background:#fff}
.skillcard.hl{border-color:var(--accent);background:var(--accent-soft)}
.skillcard h3{font-size:17px;margin-bottom:12px}
.skillcard ul{list-style:none;display:grid;gap:7px}
.skillcard li{font-size:14px;color:var(--muted);padding-left:16px;position:relative}
.skillcard li::before{content:"▸";position:absolute;left:0;color:var(--accent)}
```

- [ ] **Step 3: Verify** — responsive skill cards; the AI & Autonomy card is highlighted in accent.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add AI & Skills section"
```

---

## Task 10: Contact + footer

**Files:**
- Modify: `index.html`, `assets/css/styles.css`

- [ ] **Step 1: Append Contact + footer markup**

```html
<section id="contact">
  <div class="container reveal">
    <p class="eyebrow">Contact</p>
    <h2>Let's build something.</h2>
    <p class="lead">Open to roles and collaboration in engineering, AI, audio/video and game dev — globally and remote.</p>
    <div class="contact-actions">
      <a class="btn btn-primary" href="mailto:audegbe2003@gmail.com">Email Me</a>
      <a class="btn btn-outline" href="https://github.com/dist0rted777" target="_blank" rel="noopener">GitHub</a>
      <!-- LinkedIn: replace href with your profile URL, then remove aria-disabled. -->
      <a class="btn btn-outline" href="#" aria-disabled="true" id="linkedinBtn">LinkedIn (soon)</a>
      <!-- CV: drop assets/cv/cv.pdf, then set href="assets/cv/cv.pdf" and remove aria-disabled. -->
      <a class="btn btn-outline" href="#" aria-disabled="true" id="cvBtn">Download CV (soon)</a>
    </div>
  </div>
  <footer class="footer">
    <div class="container">
      <span>© <span id="year"></span> Chidiebere Udegbe · DIST0RTED</span>
      <span>Mechatronics engineer · Global / open to remote</span>
    </div>
  </footer>
</section>
```

- [ ] **Step 2: Append Contact/footer CSS**

```css
.contact-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px}
.footer{border-top:1px solid var(--line);margin-top:var(--pad);padding-top:28px}
.footer .container{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;
  color:var(--muted);font-size:13px}
```

- [ ] **Step 3: Close the document**

Append to `index.html`:
```html
<script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Verify** — Email/GitHub buttons active; LinkedIn & CV show disabled "soon" state.

- [ ] **Step 5: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add Contact section and footer"
```

---

## Task 11: JavaScript — nav state, mobile menu, scroll reveal

**Files:**
- Create: `assets/js/main.js`

- [ ] **Step 1: Write `assets/js/main.js`**

```js
// Sticky nav border on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
});

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
```

- [ ] **Step 2: Verify** — reload site: nav gains a hairline border on scroll, sections fade/slide in, mobile (narrow window) shows working ☰ menu, footer year is current.

- [ ] **Step 3: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: add nav state, mobile menu, and scroll reveal"
```

---

## Task 12: Headshot asset

**Files:**
- Create: `assets/img/headshot.jpg` (from `MyPic.jpeg`)

- [ ] **Step 1: Create a centered square crop**

Try ImageMagick; if absent, fall back to a straight copy (CSS `object-fit:cover` still frames it).
```bash
cd /home/dist0rted/Documents/MyPortfolio
if command -v convert >/dev/null; then
  convert MyPic.jpeg -resize 720x720^ -gravity center -extent 720x720 -quality 85 assets/img/headshot.jpg
else
  cp MyPic.jpeg assets/img/headshot.jpg
fi
```

- [ ] **Step 2: Verify** — reload site; the hero photo now renders (square, framed, shadowed).

- [ ] **Step 3: Commit**

```bash
git add assets/img/headshot.jpg
git commit -m "feat: add hero headshot"
```

---

## Task 13: README and deployment

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write `README.md`**

```markdown
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
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README with run and deploy instructions"
```

- [ ] **Step 3: Final full-site verification**

Run `python3 -m http.server 8000`, open `http://localhost:8000`, and confirm: hero photo loads; all eight nav links jump to the right sections; deep links like `http://localhost:8000/#audio-video` land on A/V; mobile menu works at narrow width; no console errors. Stop the server.

- [ ] **Step 4: Deploy** — perform the steps in README "Deploy" (requires the user to create the GitHub repo / authenticate; pause here if not yet available).

---

## Notes for the implementer
- Append each section in document order so `index.html` reads top-to-bottom: head → nav → hero → about → engineering → audio-video → music → game-dev → skills → contact/footer → script.
- Keep all placeholder blocks until real assets arrive; they are intentional and styled.
- `JObs.png` is reference material only — do not display it on the site; leave it untracked or delete after build.
