const DOWNLOAD_URL = "https://appteka.store/app/cd7r320736";
const INSTAGRAM_URL = "https://instagram.com/";
const FACEBOOK_URL = "https://facebook.com/";

const setDownloadLinks = () => {
  document.querySelectorAll("[data-download]").forEach((link) => {
    link.href = DOWNLOAD_URL;
  });
};

const setSocialLinks = () => {
  document.querySelectorAll("[data-social]").forEach((link) => {
    const key = link.getAttribute("data-social");

    if (key === "instagram") {
      link.href = INSTAGRAM_URL;
    }

    if (key === "facebook") {
      link.href = FACEBOOK_URL;
    }
  });
};

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

setDownloadLinks();
setSocialLinks();
