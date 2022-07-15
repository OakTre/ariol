export default () => {
	const btns = Array.from(document.querySelectorAll(".js-btn-show-img"));
	const container = document.querySelector(".js-show-img-container");
	const imgs = Array.from(container.querySelectorAll(".js-imgs"));

	btns.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			if (btn.classList.contains("is-active")) {
				let indx = index;
				btn.classList.remove("is-active");
				imgs.forEach((img, i) => {
					if (i === indx) {
						img.classList.remove("mod-show");
					}
				});
				return;
			} else {
				btn.classList.add("is-active");
				imgs.forEach(img => img.classList.remove("mod-show"));
				imgs[index].classList.add("mod-show");
			}

		});
	});
}
