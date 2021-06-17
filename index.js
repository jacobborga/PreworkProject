const navToWaterski = document.getElementById('navToWaterski');
const navToHome = document.getElementById('navToHome');
const main = document.getElementById('main');
const waterski = document.getElementById('waterski');


// Simple navigation using a hide class to show and hide sections on the page
const toggleView = () => {
	main.classList.toggle('hide');
	waterski.classList.toggle('hide');
};

// The body tag runs this function onload
const initialize = () => {
	console.log('Webpage initalized!');
};

navToWaterski.addEventListener('click', event => {
	event.preventDefault();
	toggleView();
});

navToHome.addEventListener('click', event => {
	event.preventDefault();
	toggleView();
});

const d3 = document.getElementById('d3');
const syndicate = document.getElementById('syndicate');
const ho = document.getElementById('ho');

const showWaterskis = (brand) => {
	switch (brand) {
		// Comments under the d3 case relate to every other case.
		case 'd3':
			// Hide other two waterski image galleries
			syndicate.classList.add('hide');
			ho.classList.add('hide');
			// Show the specified ski brand gallery
			d3.classList.remove('hide');
			break;
		case 'syndicate':
			d3.classList.add('hide');
			ho.classList.add('hide');
			syndicate.classList.remove('hide');
			break;
		case 'ho':
			d3.classList.add('hide');
			syndicate.classList.add('hide');
			ho.classList.remove('hide');
			break;
		// Default case for when the visitor doesn't select any of the 3 ski brands.
		default:
			d3.classList.add('hide');
			syndicate.classList.add('hide');
			ho.classList.add('hide');
			break;
	}
};

const skiSelect = document.getElementById('skiSelect');

skiSelect.addEventListener('change', event => {
	const ski = event.currentTarget.value;
	event.preventDefault();
	showWaterskis(ski);
});

// Ski image elements from gallery
const d3evo = document.getElementById('d3evo');
const d3evoaxis = document.getElementById('d3evoaxis');
const d3ion = document.getElementById('d3ion');
const d3jump = document.getElementById('d3jump');
const d3ion2021 = document.getElementById('d3ion2021');
const d3evo2017 = document.getElementById('d3evo2017');

// Add onclick to display more information about each ski
d3evo.addEventListener('click', event => {
	event.preventDefault();
	alert('success!');
});

d3evoaxis.addEventListener('click', event => {
	event.preventDefault();
	alert('success!');
});

d3ion.addEventListener('click', event => {
	event.preventDefault();
	alert('success!');
});

d3jump.addEventListener('click', event => {
	event.preventDefault();
	alert('success!');
});

d3ion2021.addEventListener('click', event => {
	event.preventDefault();
	alert('success!');
});

d3evo2017.addEventListener('click', event => {
	event.preventDefault();
	alert('success!');
});