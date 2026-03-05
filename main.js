/*   Theme Toggle   */
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

function setTheme(t) {
  html.setAttribute("data-theme", t);
  toggle.innerHTML =
    t === "dark"
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
  localStorage.setItem("nexus-theme", t);
}

const saved = localStorage.getItem("nexus-theme") || "dark";
setTheme(saved);

toggle.addEventListener("click", () => {
  setTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

/*   Mobile Nav   */
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

function closeMobileNav() {
  mobileNav.classList.remove("open");
}
/*   Scroll Fade-up Animation   */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        // stagger siblings
        const siblings = e.target.parentElement.querySelectorAll(
          ".fade-up:not(.visible)",
        );
        siblings.forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 80);
        });
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
/*   Navbar scroll shadow   */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.boxShadow =
    window.scrollY > 10 ? "0 4px 32px rgba(0,0,0,.18)" : "none";
});
