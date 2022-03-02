import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);

	let find = function(el) {
		return document.querySelector(el);
	}

	let findAll = function(el) {
		return document.querySelectorAll(el);
	}

	const number1 = find(".js-company-numbers1");
	const number2 = find(".js-company-numbers2");
	const parallax = find(".parallax");
	const infoBlockAboutCo = findAll(".js-about-company-info-block");
	const infoBlockAboutCo2 = find(".js-about-company-info-block2");
	const contactArrow = find(".contact-us__content-with-arrow");
	const spheresArrow = find(".spheres__arrow");

	ScrollTrigger.matchMedia({
		"(min-width: 1200px)": function () {
			// анмиация цифр о компании
			if (number1) {
				gsap.set(number1, { maxWidth: "100%" });
				let tl3 = gsap.timeline({
					scrollTrigger: {
						trigger: ".js-company-numbers1",
						start: "top bottom",
						scrub: true,
						scrub: 1,
					}
				});
				tl3.to(number1, {maxWidth: "66.3%"});
			};

			if (number2) {
				gsap.set(number2, { maxWidth: "90%" });
				let tl4 = gsap.timeline({
					scrollTrigger: {
						trigger: ".js-company-numbers2",
						start: "top bottom",
						scrub: true,
						scrub: 1,
					}
				});
				tl4.to(number2, {maxWidth: "32.6%"});
			};
		},
		"(min-width: 767px)": function () {
			// анмиация цифр о компании
			if (number1) {
				gsap.set(number1, { maxWidth: "100%" });
				let tl3 = gsap.timeline({
					scrollTrigger: {
						trigger: ".js-company-numbers1",
						start: "top bottom",
						scrub: true,
						scrub: 1,
					}
				});
				tl3.to(number1, {maxWidth: "76.3%"});
			};
			if (number2) {
				gsap.set(number2, { maxWidth: "90%" });
				let tl4 = gsap.timeline({
					scrollTrigger: {
						trigger: ".js-company-numbers2",
						start: "top bottom",
						scrub: true,
						scrub: 1,
					}
				});
				tl4.to(number2, {maxWidth: "52.6%"});
			};

			// paralax
			if(find(".ceo")) {
				const tmln = gsap.timeline({
					scrollTrigger: {
						trigger: ".ceo",
						start: "top 20%",
						end: "bottom 50%",
						scrub: true
					}
				});
				gsap.utils.toArray(".parallax").forEach(layer => {
					const depth = layer.dataset.depth;
					const movement = -(layer.offsetHeight * depth)
					tmln.to(layer, {y: movement, ease: "none"}, 0)
				});
			};

			// анмиация в о компании
			if(infoBlockAboutCo.length) {
				infoBlockAboutCo.forEach((el)=>{
					gsap.set(el, { x: "-66%" });
				});

				infoBlockAboutCo.forEach((el)=>{
					let tl = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							start: "top bottom",
							end: "top 60%",
							scrub: true,
							scrub: 5,
						}
					});

					tl.to(el, {x: 0});
				});
			};
			// анмиация в о компании2
			if (infoBlockAboutCo2) {
				gsap.set(infoBlockAboutCo2, { x: "-66%" });
				let tl22 = gsap.timeline({
					scrollTrigger: {
						trigger: infoBlockAboutCo2,
						start: "top bottom",
						end: "top 60%",
						scrub: true,
						scrub: 5,
					}
				});

				tl22.to(infoBlockAboutCo2, {x: 0});
			}

			// анмиация в контактах
			if(contactArrow) {
				gsap.set(contactArrow, { x: "-50%" });
				let tl2 = gsap.timeline({
					scrollTrigger: {
						trigger: contactArrow,
						start: "top bottom",
						end: "bottom center",
						scrub: true,
						scrub: 1,
					}
				});
				tl2.to(contactArrow, {x: 0});
			}

			// линии в секции направления на главной странице
			if (find(".js-direction-lines")) {
				gsap.utils.toArray(".js-direction-lines").forEach((el) => {
					gsap.set(el, { x: "-100%" })
				});
				gsap.utils.toArray(".js-direction-lines").forEach((el) => {
					let tl5 = gsap.timeline({
						scrollTrigger: {
							trigger: el
						}
					});
					tl5.to(el, {x: 0,duration: 0.3,delay: 0.3});
				});
			};

			// текст в секции почему нас выбирают
			if (find(".why-us__text-block p")) {
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
					tl6.to(el, {x: 0});
				});
			};

			// анмиация в наши специалисы(страница о группе);
			if(spheresArrow) {
				gsap.set(spheresArrow, { x: "-66%" });
				let tlSp = gsap.timeline({
					scrollTrigger: {
						trigger: spheresArrow,
					}
				});
				tlSp.to(spheresArrow, {x: 0,duration: 2.5});
			};

			// parallax start block
			if(find(".parallax")) {
				const tmlnPrlx = gsap.timeline({
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
					tmlnPrlx.to(layer, { y: movement, ease: "none" }, 0)
				});
			}
		},
		"(max-width: 766px)": function () {

		},
		"all": function () {
			let projectLayers = gsap.utils.toArray(".js-animated-layer");

			function animFrom(elem, direction) {
				direction = direction || -1;
				var x = 0,
					y = direction * 100;
				gsap.fromTo(elem, {y: 0}, {delay: 0.6,duration: 1.25,y: `${y}%`,ease: "expo",overwrite: "auto"});
			}


			if (!projectLayers) return;
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
