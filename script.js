// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight nav link for the section currently in view
const sections = document.querySelectorAll("main section[id], #top");
const navLinks = document.querySelectorAll(".nav__links a");
const byHash = (hash) => [...navLinks].find((a) => a.getAttribute("href") === hash);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove("is-active"));
        const link = byHash("#" + entry.target.id);
        if (link) link.classList.add("is-active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => observer.observe(s));
