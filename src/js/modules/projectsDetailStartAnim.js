import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	if (document.querySelector(".js-projects-detail-hero-anim")) {
		ScrollTrigger.matchMedia({
			"(min-width: 767px)": function () {
				gsap.set(".projects-detail-hero__breadcrumbs", { opacity: 0 });
				gsap.set(".js-animated-el", { y: -30, opacity: 0 });
				gsap.set(".projects-detail-hero__title", { x: "6rem", opacity: 0 });
				gsap.set(".projects-detail-hero__bottom-block", { y: "2rem", opacity: 0 });

				let timeline = gsap.timeline();

				timeline
					.to(".projects-detail-hero__title", { x: "0", opacity: 1, duration: 3, ease: "power4.out", clearProps: "all" })
					.to(".projects-detail-hero__breadcrumbs", { opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=1")
					.to(".js-animated-el", { y: 0, opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=2.5")
					.to(".projects-detail-hero__bottom-block", { y: "0", opacity: 1, duration: 3.3, ease: "power4.out", clearProps: "all" }, "-=2.5")

				},
			"(max-width: 766px)": function () {

			},
			"all": function () {

			}
		});
	}
}
