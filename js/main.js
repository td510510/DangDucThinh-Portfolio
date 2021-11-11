const navLinks = document.querySelectorAll(".main-nav-link");
const h2Hero = document.querySelector(".hero h2");
const h1Hero = document.querySelector(".hero h1");
const arrowHero = document.querySelector(".hero .arrow-down");

window.addEventListener("load", heroEffect);

function heroEffect() {
  const TimelineFade = gsap.timeline();

  TimelineFade.from(h2Hero, {
    autoAlpha: 0,
    y: -50,
    delay: 0.2,
  })
    .from(h1Hero, {
      autoAlpha: 0,
      y: -50,
      delay: 0.2,
    })
    .from(navLinks, { autoAlpha: 0, y: -100, duration: 0.4, stagger: 0.1 })
    .from(arrowHero, {
      autoAlpha: 0,
      y: -100,
      duration: 1,
      delay: 0.2,
      repeat: -1,
    });
}

// Section effect with scrolling
const sections = document.querySelectorAll("section");

function sectionObserverFunc(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(sectionObserverFunc, {
  root: null,
  threshold: 0.15,
});

sections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

//Project animation
const projects = document.querySelectorAll(".project");

function projectEnter(e) {
  const demoEl = e.target.querySelector(".project__demo");
  const codeEl = e.target.querySelector(".project__source-code");

  demoEl.style.transform = "translateX(0%)";
  codeEl.style.transform = "translateX(0%)";
}

function projectLeave(e) {
  const demoEl = e.target.querySelector(".project__demo");
  const codeEl = e.target.querySelector(".project__source-code");

  demoEl.style.transform = "translateX(-1000%)";
  codeEl.style.transform = "translateX(1000%)";
}

projects.forEach((p) => {
  p.addEventListener("mouseenter", function (e) {
    projectEnter(e, p);
  });
});

projects.forEach((p) => {
  p.addEventListener("mouseleave", function (e) {
    projectLeave(e, p);
  });
});

// Navigation;
navLinks.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    e.preventDefault();
    let id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
