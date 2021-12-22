import { Navigation, Swiper, Pagination, EffectFade, Controller } from 'swiper';
import gsap from "gsap";

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

export default () => {
	const slider1 = document.querySelector(".head-tells__slider");
	const slider2 = document.querySelector(".head-tells__imgs-slider");
	if (!slider1) return;

	gsap.utils.toArray(".js-slider-arrow-anim").forEach((arrow)=>{
		gsap.set(arrow, {x: -250, opacity: 0});
	});

	let swiperText = new Swiper(slider1, {
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.js-swiper-button-next',
			prevEl: '.js-swiper-button-prev',
		},
		effect: 'fade',
		fadeEffect: {
		  crossFade: true
		},
		on: {
			afterInit: function (swiper) {
				gsap.utils.toArray(".js-slider-arrow-anim").forEach((arrow, index)=>{
					if (index == swiper.activeIndex) {
						gsap.to(arrow, {x: 0, opacity: 1, duration: 3, ease: "power4.out",});
					}
				});
			},
			slideChange: function (swiper) {
				gsap.utils.toArray(".js-slider-arrow-anim").forEach((arrow, index)=>{
					if (index == swiper.activeIndex) {
						gsap.to(arrow, {x: 0, opacity: 1, duration: 3, ease: "power4.out",
							// onStart: function () {
							// 	gsap.utils.toArray(".head-tells__nav-btn").forEach((btn)=>{
							// 		btn.setAttribute("disabled", true);
							// 	});
							// },
							// onComplete: function () {
							// 	gsap.utils.toArray(".head-tells__nav-btn").forEach((btn)=>{
							// 		btn.setAttribute("disabled", false);
							// 	});
							// },
						});
					} else {
						gsap.set(arrow, {x: -250, opacity: 0});
					}
				});
			}
		},
	});

	let swiperImg = new Swiper(slider2, {
		effect: 'fade',
		slidesPerView: 'auto',
		fadeEffect: {
		  crossFade: true
		},
		on: {
			init: function (swiper) {
				gsap.utils.toArray(".js-img-layer").forEach((layer, index)=>{
					if (index == swiper.activeIndex) {
						gsap.to(layer, {y: "-100%", duration: 1, ease: "power4.out"});
					}
				});
			},
			slideChange: function (swiper) {
				gsap.utils.toArray(".js-img-layer").forEach((layer, index)=>{
					if (index == swiper.activeIndex) {
						gsap.to(layer, {y: "-100%", duration: 1.4, ease: "power4.out", delay: 0.5});
					} else {
						gsap.set(layer, {y: 0});
					}
				});
			}
		},
	});

	swiperText.controller.control = swiperImg;
	swiperImg.controller.control = swiperText;
};
