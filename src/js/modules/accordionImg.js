export default () => {
	const btn = document.querySelectorAll(".js-btn-show-img");
	const container = document.querySelector(".js-show-img-container");

	btn.forEach((el)=>{
		el.addEventListener("click", (element) => {
			let attr = el.getAttribute('data-show');
			attr = Number(attr);
			let item = el.closest(".our-team-accordion__item");


			if (el.className.includes('is-active')) {
				container.querySelectorAll(".js-imgs").forEach((elmnt)=>{elmnt.classList.remove("mod-show");})
				btn.forEach((btnel)=>{btnel.classList.remove("is-active");});
			} else {
				container.querySelectorAll(".js-imgs").forEach((elmnt)=>{elmnt.classList.remove("mod-show");})

				setTimeout(() => {
					container.querySelector(`.js-imgs[data-item='${attr}']`).classList.add("mod-show");
				}, 250);

				if (window.matchMedia("(min-width: 1199px)").matches) {
					setTimeout(() => {
						container.querySelector(`.js-imgs[data-item='${attr}']`).style.top = item.offsetTop + "px";
					}, 250);
				}

				btn.forEach((btnel)=>{btnel.classList.remove("is-active");});
				el.classList.add("is-active");
			}
		});
	})
}
