import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	if (document.querySelector(".js-about-group-page")) {
		ScrollTrigger.matchMedia({
			"(min-width: 1200px)": function () {
				// анмиация цифр о компании
				gsap.set(".js-company-numbers1", { maxWidth: "100%" })

				let tl3 = gsap.timeline({
					scrollTrigger: {
						trigger: ".js-company-numbers1",
						start: "top bottom",
						scrub: true,
						scrub: 1,
					}
				});

				tl3.to(".js-company-numbers1", {
					maxWidth: "66.3%"
				})
				gsap.set(".js-company-numbers2", { maxWidth: "90%" })

				let tl4 = gsap.timeline({
					scrollTrigger: {
						trigger: ".js-company-numbers2",
						start: "top bottom",
						scrub: true,
						scrub: 1,
					}
				});

				tl4.to(".js-company-numbers2", {
					maxWidth: "32.6%"
				})
			},
			"(min-width: 767px)": function () {
				gsap.set(".spheres__arrow", { x: "-66%" })
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
					tmln.to(layer, {y: movement, ease: "none"}, 0)
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

				// анмиация цифр о компании
				gsap.set(".js-company-numbers1", { maxWidth: "100%" })

				let tl3 = gsap.timeline({
					scrollTrigger: {
						trigger: ".js-company-numbers1",
						start: "top bottom",
						scrub: true,
						scrub: 1,
					}
				});

				tl3.to(".js-company-numbers1", {
					maxWidth: "76.3%"
				})
				gsap.set(".js-company-numbers2", { maxWidth: "90%" })

				let tl4 = gsap.timeline({
					scrollTrigger: {
						trigger: ".js-company-numbers2",
						start: "top bottom",
						scrub: true,
						scrub: 1,
					}
				});

				tl4.to(".js-company-numbers2", {
					maxWidth: "52.6%"
				})

				// анмиация в наши специалисы
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".spheres__arrow",
					}
				});

				tl.to(".spheres__arrow", {
					x: 0,
					duration: 2.5
				})
			},
			"(max-width: 766px)": function () {

			},
			"all": function () {
			}
		});
	}

}
