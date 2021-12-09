import gsap from "gsap";

export default () =>  {
	const burgerButton = document.querySelector(".button-burger");
	const menu =  document.querySelector(".mobile-menu");
	const header =  document.querySelector(".header");
	let flag = false;

	gsap.set(menu, {x: "-100%", autoAlpha: 0})

	let timeline = gsap.timeline({
		reversed: true,
		paused: true
	})

	timeline
		.to(menu, {x: 0, autoAlpha: 1, duration: 0.5, ease: "power4.out"})

	let isReversed = function (tmln) {
		tmln.reversed() ? tmln.play() : tmln.reverse()
	}

	burgerButton.addEventListener("click", (e) => {
		let self = e.target;

		switch (flag) {
			case false:
				self.classList.add("button-burger_is-active");
				timeline.play();
				flag = true;
				break;
			case true:
				self.classList.remove("button-burger_is-active");
				timeline.reverse();
				flag = false;
				break;
		}
	})
}


