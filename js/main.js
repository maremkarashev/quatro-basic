
const body = document.body;
const sections = document.querySelectorAll('section');
const basicLink = document.querySelector('.basic-link');
const servicesLink = document.querySelector('.services-link');
const aboutLink = document.querySelector('.about-link');
const newLink = document.querySelector('.new-link');
const contactLink = document.querySelector('.contact-link')
const btn = document.querySelector('.btn')
const form = document.querySelector('.form')
const closed = document.querySelector ('.closed')
const openForm = document.querySelector ('.open-form')

btn.addEventListener('click', function() {
	form.className = "open-form"
})
closed.addEventListener('click', function() {
	openForm.className = "form"
})


basicLink.addEventListener('mouseenter', function() {
	sections[0].classList.add('hide');
	sections[1].classList.remove('hide');
	sections[2].classList.add('hide');
	sections[3].classList.add('hide');
	sections[4].classList.add('hide');
	sections[5].classList.add('hide');
	body.className = "background2";
});

servicesLink.addEventListener('mouseenter', function() {
	sections[0].classList.add('hide');
	sections[1].classList.add('hide');
	sections[2].classList.remove('hide');
	sections[3].classList.add('hide');
	sections[4].classList.add('hide');
	sections[5].classList.add('hide');
	body.className = "background3";
});

aboutLink.addEventListener('mouseenter', function() {
	sections[0].classList.add('hide');
	sections[1].classList.add('hide');
	sections[2].classList.add('hide');
	sections[3].classList.remove('hide');
	sections[4].classList.add('hide');
	sections[5].classList.add('hide');
	body.className = "background4";
});

newLink.addEventListener('mouseenter', function() {
	sections[0].classList.add('hide');
	sections[1].classList.add('hide');
	sections[2].classList.add('hide');
	sections[3].classList.add('hide');
	sections[4].classList.remove('hide');
	sections[5].classList.add('hide');
	body.className = "background5";
});

contactLink.addEventListener('mouseenter', function() {
	sections[0].classList.add('hide');
	sections[1].classList.add('hide');
	sections[2].classList.add('hide');
	sections[3].classList.add('hide');
	sections[4].classList.add('hide');
	sections[5].classList.remove('hide');
	body.className = "background6";
});
