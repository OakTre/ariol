import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import map from "./modules/map";
import indexPageStartAnim from "./modules/indexPageStartAnim";
import initDropMenu from "./modules/initDropMenu";
import showAccordionBg from "./modules/showAccordionBg";
import indexPageAnim from "./modules/indexPageAnim";
import initMobileMenu from "./modules/initMobileMenu";

window.onload = function() {
	let preloader = document.querySelector(".preloader");

	setTimeout(() => {
		preloader.classList.add("preloader_is-loaded");

		indexPageStartAnim();
	}, 300);
}

documentReady(() => {
	initMobileMenu();
	lazyImages();
	map();
	initDropMenu();
	showAccordionBg();
	indexPageAnim();
});
