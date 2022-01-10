import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	if (document.querySelector(".js-page-contacts")) {
		ScrollTrigger.matchMedia({
			"(min-width: 767px)": function () {
				gsap.set(".page-contacts__text p", { opacity: 0 });
				gsap.set(".page-contacts__title", { opacity: 0 });
				gsap.set(".page-contacts__departments", { opacity: 0, y: 75});
				gsap.set(".page-contacts__breadcrumbs", { opacity: 0 });
				gsap.set(".js-animated-el", { y: -30, opacity: 0 });
				gsap.set(".page-contacts__arrow", { x: "-6rem", opacity: 0 });

				let timeline = gsap.timeline();

				timeline
					.to(".page-contacts__arrow", { x: "0", opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" })
					.to(".page-contacts__text p", { opacity: 1, duration: 2, ease: "power4.out", clearProps: "all" }, "-=2")
					.to(".page-contacts__title", { opacity: 1, duration: 2, ease: "power4.out", clearProps: "all" }, "-=2")
					.to(".js-animated-el", { y: 0, opacity: 1, duration: 2, ease: "power4.out", clearProps: "all" }, "-=1")
					.to(".page-contacts__breadcrumbs", { opacity: 1, duration: 2, ease: "power4.out", clearProps: "all" }, "-=2")
					.to(".page-contacts__departments", { opacity: 1, y: 0, duration: 2, ease: "power4.out", clearProps: "all" }, "-=2")

				},
			"(max-width: 766px)": function () {

			},
			"all": function () {

			}
		});
	}
}
