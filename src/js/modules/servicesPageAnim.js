import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	if (document.querySelector(".js-services-page")) {
		ScrollTrigger.matchMedia({
			"(min-width: 767px)": function () {
				gsap.set(".contact-us__content-with-arrow", { x: "-50%" });
				gsap.set(".js-about-company-info-block", { x: "-66%" });

				// paralax
				const tmln = gsap.timeline({
					scrollTrigger: {
						trigger: ".parallax",
						start: "top top",
						end: "bottom top",
						scrub: true
					}
				});

				gsap.utils.toArray(".parallax").forEach(layer => {
					const depth = layer.dataset.depth;
					const movement = -(layer.offsetHeight * depth)
					tmln.to(layer, {y: movement, ease: "none"}, 0)
				});

				// анмиация в о компании
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".js-about-company-info-block",
						start: "top bottom",
						end: "top 60%",
						scrub: true,
						scrub: 5,
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
						end: "bottom center",
						scrub: true,
						scrub: 1,
					}
				});

				tl2.to(".contact-us__content-with-arrow", {
					x: 0
				})
			},
			"all": function () {

			}
		});
	}

}
