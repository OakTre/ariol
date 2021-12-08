export default () => {
	const btn = document.querySelectorAll(".js-btn-show-bg");
	const container = document.querySelector(".directions");

	btn.forEach((el)=>{
		el.addEventListener("click", (element) => {
			let attr = el.getAttribute('data-show');

			container.querySelectorAll(".directions_layer").forEach((elmnt)=>{elmnt.classList.remove("mod-show");})
			container.querySelector(`.directions_layer[data-item=${attr}]`).classList.add("mod-show");
		});
	})
}
