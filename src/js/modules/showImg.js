export default () => {
	const btn = document.querySelectorAll(".js-show-img-btn");
	const container = document.querySelector(".js-show-img-container");

	btn.forEach((el)=>{
		el.addEventListener("click", (element) => {
			let attr = el.getAttribute('data-show');
			btn.forEach((btnel)=>{btnel.classList.remove("is-active");});

			container.querySelectorAll(".js-img").forEach((elmnt)=>{elmnt.classList.remove("mod-show");})
			container.querySelector(`.js-img[data-item=${attr}]`).classList.add("mod-show");

			el.classList.add("is-active");
		});
	})
}
