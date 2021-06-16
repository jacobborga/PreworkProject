const navToWaterski = document.getElementById('navToWaterski');
const navToHome = document.getElementById('navToHome');
const main = document.getElementById('main');
const waterski = document.getElementById('waterski');

const toggleView = () => {
	main.classList.toggle('hide');
	waterski.classList.toggle('hide');
};

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