import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import map from "./modules/map";
import indexPageStartAnim from "./modules/indexPageStartAnim";
import initDropMenu from "./modules/initDropMenu";
import showAccordionBg from "./modules/showAccordionBg";
import initMobileMenu from "./modules/initMobileMenu";
import magicLine from "./modules/magicLine";
import aboutGroupStartAnim from "./modules/aboutGroupStartAnim";
import accordionImg from "./modules/accordionImg";
import initGroupSlider from "./modules/initGroupSlider";
import projectsStartAnim from "./modules/projectsStartAnim.js";
import contactsPageAnimation from "./modules/contactsPageAnimation.js";
import servicesDetailStartAnim from "./modules/servicesDetailStartAnim.js";
import projectsDetailStartAnim from "./modules/projectsDetailStartAnim.js";
import showImg from "./modules/showImg.js";
import initSiteAnim from "./modules/initSiteAnim.js";

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
	initSiteAnim();
	magicLine();
	accordionImg();
	initGroupSlider();
	showImg();

	const cookies = document.querySelector(".cookies");
	const cookiesBtn = document.querySelector(".cookies button");

	setTimeout(() => {
		cookies.classList.add("cookies_is-active");
	}, 7000);

	cookiesBtn.addEventListener("click", ()=>{
		cookies.classList.remove("cookies_is-active");
	});


	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
		})
	})
	}
});
