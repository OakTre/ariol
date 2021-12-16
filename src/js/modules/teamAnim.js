import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	if (document.querySelector(".js-team-page")) {
		ScrollTrigger.matchMedia({
			"(min-width: 767px)": function () {
				gsap.set(".contact-us__content-with-arrow", { x: "-50%" })

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
					tmln.to(layer, { y: movement, ease: "none" }, 0)
				});

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

				// текст в секции почему нас выбирают
				gsap.utils.toArray(".why-us__text-block p").forEach((el) => {
					gsap.set(el, { x: "-5.5rem" })
				})


				gsap.utils.toArray(".why-us__text-block p").forEach((el) => {
					let tl6 = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							start: "top bottom",
							end: "bottom 80%",
							scrub: true,
							scrub: 1,
						}
					});

					tl6.to(el, {
						x: 0,
					})
				})
			},
			"(max-width: 766px)": function () {

			},
			"all": function () {

			}
		});
	}

}
