import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import map from "./modules/map";
import indexPageStartAnim from "./modules/indexPageStartAnim";
import initDropMenu from "./modules/initDropMenu";
import showAccordionBg from "./modules/showAccordionBg";
import indexPageAnim from "./modules/indexPageAnim";
import initMobileMenu from "./modules/initMobileMenu";
import magicLine from "./modules/magicLine";
import aboutGroupStartAnim from "./modules/aboutGroupStartAnim";
import aboutGroupAnim from "./modules/aboutGroupAnim";
import accordionImg from "./modules/accordionImg";
import teamAnim from "./modules/teamAnim";
import initGroupSlider from "./modules/initGroupSlider";
import careerAnim from "./modules/careerAnim.js";
import projectsStartAnim from "./modules/projectsStartAnim.js";
import projectsAnim from "./modules/projectsAnim.js";

if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
}

window.onload = function() {
	let preloader = document.querySelector(".preloader");

	setTimeout(() => {
		preloader.classList.add("preloader_is-loaded");

		indexPageStartAnim();
		aboutGroupStartAnim();
		projectsStartAnim();
	}, 300);
}

documentReady(() => {
	initMobileMenu();
	lazyImages();
	map();
	initDropMenu();
	showAccordionBg();
	indexPageAnim();
	aboutGroupAnim();
	teamAnim();
	careerAnim();
	magicLine();
	accordionImg();
	initGroupSlider();
	projectsAnim();
});
