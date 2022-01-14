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
import contactsPageAnimation from "./modules/contactsPageAnimation.js";
import servicesPageAnim from "./modules/servicesPageAnim.js";
import servicesDetailStartAnim from "./modules/servicesDetailStartAnim.js";
import servicesDetailAnim from "./modules/servicesDetailAnim.js";
import projectsDetailStartAnim from "./modules/projectsDetailStartAnim.js";
import projectsDetailAnim from "./modules/projectsDetailAnim.js";
import showImg from "./modules/showImg.js";

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
		contactsPageAnimation();
		servicesDetailStartAnim();
		projectsDetailStartAnim();
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
	servicesPageAnim();
	servicesDetailAnim();
	projectsDetailAnim();
	showImg();
});
