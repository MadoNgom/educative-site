// date
const span = document.getElementById('year');
const now = new Date();
const year = now.getFullYear();
console.log(year);
span.textContent = year;

// TOGGLELING THE NAV
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
navToggle.addEventListener('click', () => {
	navLinks.classList.toggle('show-links');
});
// ACCORDION
const accordionHeader = document.querySelector('.accordion__header');

const accordions = document.querySelectorAll('.single__accordion');

accordions.forEach((accordion) => {
	const icon = accordion.querySelector('.chevron-icon');
	// console.log(icon);
	icon.addEventListener('click', () => {
		accordions.forEach((item) => {
			if (item !== accordions) {
				item.classList.remove('show-text');
			}
		});
		accordion.classList.toggle('show-text');
	});
});

// FIXED NAV
// select the nav
const nav = document.querySelector('.nav');
const link = document.querySelectorAll('.nav__item');
// pageyoffset represente the number of pixels that document have been scroll vertically
window.addEventListener('scroll', () => {
	const scrollHeight = window.pageYOffset;
	// console.log(window.pageYOffset);
	const navheight = nav.getBoundingClientRect().height;
	if (scrollHeight > navheight) {
		nav.classList.add('fixed-nav');

	} else {
		nav.classList.remove('fixed-nav');
	}
});
