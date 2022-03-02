import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	if (document.querySelector(".js-index-page")) {
		ScrollTrigger.matchMedia({
			"(min-width: 767px)": function () {

			},
			"(max-width: 766px)": function () {
				
			},
			"all": function () {
				gsap.set(".hero__layer", { scaleX: 1.2, scaleY: 1.2 });
				gsap.set(".hero__info", { y: 75, opacity: 0 });
				gsap.set(".js-animated-el", { y: -30, opacity: 0 });
				gsap.set(".js-svg-block1", {opacity: 0, x: "3rem", });
				gsap.set(".js-svg-block2", {opacity: 0, x: "1rem", });
				gsap.set(".js-svg-block3", {opacity: 0, x: "-3rem", });

				let timeline = gsap.timeline();

				timeline
					.to(".js-svg-block1", { x: 0, opacity: 1, duration: 2, ease: "power4.out", clearProps: "all" })
					.to(".js-svg-block2", { x: 0, opacity: 1, duration: 2, ease: "power4.out", clearProps: "all" })
					.to(".js-svg-block3", { x: 0, opacity: 1, duration: 2, ease: "power4.out", clearProps: "all" }, "-=1.7")
					.to(".js-animated-el", { y: 0, opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=2")
					.to(".hero__info", { y: 0, opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=2.5")
			}
		});
	}
}
