import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	if (document.querySelector(".js-projects-page")) {
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
			},
			"all": function () {
				let projectLayers = gsap.utils.toArray(".js-animated-layer");

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

				projectLayers.forEach((el) => {

					ScrollTrigger.create({
						trigger: el,
						onEnter: function () {
							animFrom(el)
						},
						onEnterBack: function () {
							// animFrom(el, 1)
						},
						onLeave: function () {
							// gsap.set(el, { y: "100%" })
						}
					});
				})
			}
		});
	}

}
