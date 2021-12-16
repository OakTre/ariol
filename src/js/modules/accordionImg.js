export default () => {
	const btn = document.querySelectorAll(".js-btn-show-img");
	const container = document.querySelector(".js-show-img-container");

	btn.forEach((el)=>{
		el.addEventListener("click", (element) => {
			let attr = el.getAttribute('data-show');
			attr = Number(attr);

			if (el.className.includes('is-active')) {
				container.querySelectorAll(".js-imgs").forEach((elmnt)=>{elmnt.classList.remove("mod-show");})
				btn.forEach((btnel)=>{btnel.classList.remove("is-active");});
			} else {
				container.querySelectorAll(".js-imgs").forEach((elmnt)=>{elmnt.classList.remove("mod-show");})
				container.querySelector(`.js-imgs[data-item='${attr}']`).classList.add("mod-show");

				btn.forEach((btnel)=>{btnel.classList.remove("is-active");});
				el.classList.add("is-active");
			}
		});
	})
}
