import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const errorPage = document.querySelector(".error-page");

	if (errorPage) {
		ScrollTrigger.matchMedia({
			"(min-width: 767px)": function () {
				gsap.set(".div", { opacity: 0, x: "3rem" });
                gsap.set(".error-page__btn", {opacity: 0});
				gsap.set(".error-page__title-wrap", { opacity: 0, x: "3rem" });
                gsap.set(".js-animated-el", { y: -30, opacity: 0 });


				let timeline = gsap.timeline();

				timeline
					.to(".error-page__title-wrap", { x: "0", opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" })
                    .to(".js-animated-el", { y: 0, opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=2")
					.to(".div", { x: "0", opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=1.5")
					.to(".error-page__btn", { opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=2.5")

				},
			"(max-width: 766px)": function () {

			},
			"all": function () {

			}
		});
	}
}
