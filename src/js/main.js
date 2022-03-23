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
import errorPageAnim from "./modules/errorPageAnim.js";

if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
}

window.onload = function () {
	let preloader = document.querySelector(".preloader");

	setTimeout(() => {
		preloader.classList.add("preloader_is-loaded");

		indexPageStartAnim();
		aboutGroupStartAnim();
		projectsStartAnim();
		contactsPageAnimation();
		servicesDetailStartAnim();
		projectsDetailStartAnim();
		errorPageAnim();
	}, 300);
}

documentReady(() => {
	initMobileMenu();
	lazyImages();
	initDropMenu();
	showAccordionBg();
	initSiteAnim();
	magicLine();
	accordionImg();
	initGroupSlider();
	showImg();
	map();

	const cookies = document.querySelector(".cookies");
	const cookiesBtn = document.querySelector(".cookies button");

	setTimeout(() => {
		cookies.classList.add("cookies_is-active");
	}, 7000);

	cookiesBtn.addEventListener("click", () => {
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


	const header = document.querySelector('.header');
	const first = document.querySelector('.js-intro-block');

	if (first) {
		const btntopHeight = header.offsetHeight;
		const firstHeight = first.offsetHeight;
		const headerHeight = header.offsetHeight;
		let lastScrollTop = 0;

		window.addEventListener('scroll', () => {
			let scrollDistance = window.scrollY;

			if (document.querySelector(".page-contacts")) {
				if (scrollDistance >= (firstHeight - headerHeight)) {
					header.classList.add('is-active');
					layer.style.top = header.offsetHeight + "px";
				}

				if (scrollDistance < firstHeight) {
					header.classList.remove('is-active');
					layer.style.top = 0;
				}
			} else {
				if (scrollDistance >= headerHeight) {
					header.classList.add('is-active');
					layer.style.top = header.offsetHeight + "px";
				} else {
					header.classList.remove('is-active');
					layer.style.top = 0;
				}
			}


			lastScrollTop = scrollDistance;
		});
	}

	const menuItem = Array.from(document.querySelectorAll(".js-has-submenu"));
	const layer = document.querySelector(".nav-menu-layer");

	menuItem.forEach(menu => {
		menu.addEventListener("mouseenter", () => {
			if (header.classList.contains("is-active")) {
				layer.style.top = header.offsetHeight + "px";
				layer.classList.add("is-active");
			} else {
				layer.classList.add("is-active");
				layer.style.top = 0;
			}

			if (header.classList.contains("header_dark")) {
				header.classList.add("header_is_dark");
			}
		});
	});

	menuItem.forEach(menu => {
		menu.addEventListener("mouseleave", () => {
			layer.classList.remove("is-active");

			if (header.classList.contains("header_is_dark")) {
				header.classList.remove("header_is_dark");
			}

			setTimeout(() => {
				header.offsetHeight + "px"
			}, 250);
		});
	});

	const arrowText = document.querySelector(".about-projects__bottom");

	if (arrowText) {
		const text = arrowText.textContent;

		if (!text) {
			document.querySelector(".about-projects__arrow").remove();
		}
	}
});
