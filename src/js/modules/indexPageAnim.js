import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	if (document.querySelector(".js-index-page")) {
		ScrollTrigger.matchMedia({
			"(min-width: 767px)": function () {
				gsap.set(".js-about-company-info-block", { x: "-66%" })
				gsap.set(".contact-us__content-with-arrow", { x: "-50%" })

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
						start: "top 70%",
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

				// линии в секции направления
				gsap.utils.toArray(".js-direction-lines").forEach((el) => {
					gsap.set(el, { x: "-100%" })
				})


				gsap.utils.toArray(".js-direction-lines").forEach((el) => {
					let tl5 = gsap.timeline({
						scrollTrigger: {
							trigger: ".js-direction-lines"
						}
					});

					tl5.to(el, {
						x: 0,
						duration: 0.3,
						delay: 0.3
					})
				})


				// текст в секции почему нас выбирают
				gsap.utils.toArray(".why-us__bottom-block-text").forEach((el) => {
					gsap.set(el, { x: "-5.5rem" })
				})


				gsap.utils.toArray(".why-us__bottom-block-text").forEach((el) => {
					let tl6 = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							start: "top bottom",
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
							animFrom(el, 1)
						},
						onLeave: function () {
							gsap.set(el, { y: "100%" })
						}
					});
				})
			}

		});
	}

}
