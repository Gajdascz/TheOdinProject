import { allCards } from "./Scripts/Configs/projectCards.js";
import { ghIconElement, linkedInIconElement } from "./Scripts/Builders/icons.js";
import { ICON_CLASSES } from "./Scripts/Utils/constants.js";

const body = document.querySelector("body");

const cardContainer = document.querySelector(".project-card-container");
cardContainer.append(...allCards);

const aboutMeIconContainer = document.querySelector(".about-me-icon-container");
aboutMeIconContainer.append(ghIconElement(ICON_CLASSES.MEDIUM_ICON), linkedInIconElement(ICON_CLASSES.MEDIUM_ICON));

const footerIconContainer = document.querySelector(".footer-icon-container");
footerIconContainer.append(ghIconElement(ICON_CLASSES.MEDIUM_ICON), linkedInIconElement(ICON_CLASSES.MEDIUM_ICON));

const themeSlider = document.querySelector("input.theme-selector");
const darkIcon = document.querySelector("svg.dark-theme-icon");
const lightIcon = document.querySelector("svg.light-theme-icon");

themeSlider.addEventListener("change", () => {
  if (themeSlider.checked) {
    body.classList.add("dark-mode");
    darkIcon.classList.add("active");
    lightIcon.classList.remove("active");
  } else {
    body.classList.remove("dark-mode");
    lightIcon.classList.add("active");
    darkIcon.classList.remove("active");
  }
});
