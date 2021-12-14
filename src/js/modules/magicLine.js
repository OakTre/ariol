export default () => {
	const navLineContainer = document.querySelectorAll('.js-magic-line-container');

	if (navLineContainer) {
		navLineContainer.forEach((navContainer) => {
			const navLine = navContainer.querySelector('.js-magic-line');
			const navItem = navContainer.querySelectorAll('.js-magic-line-item');
			const activeItem = navContainer.querySelector('.js-magic-line-item._is-active');

			navLine.style.width = `${activeItem.offsetWidth}px`;
			navLine.style.left = `${activeItem.offsetLeft}px`;

			navItem.forEach(el => {
				el.addEventListener('mouseenter', (e) => {
					navLine.style.width = `${e.currentTarget.offsetWidth}px`;
					navLine.style.left = `${e.currentTarget.offsetLeft}px`;
				});

				el.addEventListener('mouseleave', (e) => {
					navLine.style.width = `${activeItem.offsetWidth}px`;
					navLine.style.left = `${activeItem.offsetLeft}px`;
				});
			});
		});
	}
};
