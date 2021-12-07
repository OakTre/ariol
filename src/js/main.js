import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import map from "./modules/map";
import indexPageAnim from "./modules/indexPageAnim";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

window.onload = function() {
	let preloader = document.querySelector(".preloader");

	setTimeout(() => {
		preloader.classList.add("preloader_is-loaded");

		indexPageAnim();
	}, 300);

}

documentReady(() => {
	lazyImages();
	map();

	gsap.registerPlugin(ScrollTrigger);

	gsap.set(".js-about-company-info-block", { x: "-66%" })
	gsap.set(".contact-us__content-with-arrow", { x: "-50%" })

	let projectLayers = gsap.utils.toArray(".js-animated-layer");

	// анмиация в о компании
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".js-about-company-info-block",
			start: "top bottom",
			end: "top 60%",
			scrub: true,
			scrub: 2,
		}
	});

	tl.to(".js-about-company-info-block", {
		x: 0
	})

	// анмиация в контактах
	let tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".contact-us__content-with-arrow",
			start: "top bottom",
			scrub: true,
			scrub: 1,
		}
	});

	tl2.to(".contact-us__content-with-arrow", {
		x: 0
	})

	function animFrom(elem, direction) {
		direction = direction || -1;
		var x = 0,
			y = direction * 100;
		gsap.fromTo(elem, {
			y: 0,
		}, {
			delay: 0.6,
			duration: 1.25,
			y: `${y}%`,
			ease: "expo",
			overwrite: "auto"
		});
	}

	projectLayers.forEach((el)=>{

		ScrollTrigger.create({
			trigger: el,
			onEnter: function () {
				animFrom(el)
			},
			onEnterBack: function () {
				animFrom(el, 1)
			},
			onLeave: function () {
				gsap.set(el, { y: "100%" })
			}
		});
	})
});
