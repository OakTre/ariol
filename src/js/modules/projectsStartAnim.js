import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	if (document.querySelector(".js-projects-hero-anim")) {
		ScrollTrigger.matchMedia({
			"(min-width: 767px)": function () {
				gsap.set(".group-projects-hero__breadcrumbs", { opacity: 0 });
				gsap.set(".js-animated-el", { y: -30, opacity: 0 });
				gsap.set(".group-projects-hero__feautures-item:nth-of-type(1)", { x: "6rem", opacity: 0 });
				gsap.set(".group-projects-hero__feautures-item:nth-of-type(2)", { x: "-10rem", opacity: 0 });
				gsap.set(".group-projects-hero__long-arrow", { opacity: 0 });

				let timeline = gsap.timeline();

				timeline
					.to(".group-projects-hero__feautures-item:nth-of-type(1)", { x: "0", opacity: 1, duration: 3, ease: "power4.out", clearProps: "all" })
					.to(".group-projects-hero__long-arrow", { opacity: 1, duration: 3, ease: "power4.out", clearProps: "all" }, "-=3")
					.to(".group-projects-hero__feautures-item:nth-of-type(2)", { x: "0", opacity: 1, duration: 3.3, ease: "power4.out", clearProps: "all" }, "-=3")
					.to(".js-animated-el", { y: 0, opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=1")
					.to(".group-projects-hero__breadcrumbs", { opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=2.5")

				},
			"(max-width: 766px)": function () {

			},
			"all": function () {

			}
		});
	}
}
