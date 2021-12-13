export default () => {
	const btn = document.querySelectorAll(".js-btn-show-bg");
	const container = document.querySelector(".directions");

	btn.forEach((el)=>{
		el.addEventListener("click", (element) => {
			let attr = el.getAttribute('data-show');

			if (el.className.includes('is-active')) {
				container.querySelectorAll(".directions_layer").forEach((elmnt)=>{elmnt.classList.remove("mod-show");})
				btn.forEach((btnel)=>{btnel.classList.remove("is-active");});
			} else {
				container.querySelectorAll(".directions_layer").forEach((elmnt)=>{elmnt.classList.remove("mod-show");})
				container.querySelector(`.directions_layer[data-item=${attr}]`).classList.add("mod-show");

				el.classList.add("is-active");
			}
		});
	})
}
