import gsap from "gsap";

export default () => {
	// let headerLinks = gsap.utils.toArray(".js-animated-el");

	gsap.set(".hero__layer", { scaleX: 1.2, scaleY: 1.2 });
	gsap.set(".hero__info", { y: 75, opacity: 0 });
	gsap.set(".js-animated-el", { y: -50, opacity: 0 });
	gsap.set(".hero__text-span", { opacity: 0 });
	gsap.set(".hero__long-arrow_wrap", { width: "6rem" });
	gsap.set(".hero__feautures-item:nth-child(1)", { x: "6rem", opacity: 0 });
	gsap.set(".hero__feautures-item:nth-child(2)", {  x: "-10rem", opacity: 0 });

	let timeline = gsap.timeline();

	timeline
		.to(".hero__layer", { scaleX: 1, scaleY: 1, duration: 2, ease: "power4.out", clearProps: "scale"})
		.to(".hero__feautures-item:nth-child(1)", { x: "0", opacity: 1, duration: 3, ease: "power4.out", clearProps: "all"}, "-=1.6")
		.to(".hero__feautures-item:nth-child(2)", { x: "0", opacity: 1, duration: 3.3, ease: "power4.out", clearProps: "all"}, "-=3")
		.to(".hero__text-span", { opacity: 1, duration: 2, ease: "power4.out", clearProps: "all"}, "-=2.9")
		.to(".hero__long-arrow_wrap", { width: "20.5rem", duration: 2, ease: "power4.out", clearProps: "all"}, "-=2.9")
		.to(".js-animated-el", { y: 0, opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=1")
		.to(".hero__info", { y: 0, opacity: 1, duration: 2.5, ease: "power4.out", clearProps: "all" }, "-=2.5")

}
