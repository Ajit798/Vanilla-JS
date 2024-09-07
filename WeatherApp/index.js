const inputBox = document.getElementById('search-bar');
const searchButton = document.getElementById('btn-search');
const minTempPlaceholder = document.getElementById('min-temp');
const maxTempPlaceholder = document.getElementById('max-temp');
const humidityPlaceholder = document.getElementById('humidity');
const city = document.getElementById('cityName');
const title = document.getElementById('title');
const weatherIcon = document.getElementById('weather-icon');

let cityName = 'germany';
let weatherData = {};
let loading = false;

const icons = {
	Clouds: './assets/clouds.png',

	Haze: './assets/fog.png',
	Rain: './assets/rain.png',
};

const fetchWeatherData = async (cityName) => {
	loading = true;
	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=79491c780f2009c5c3f5ba438c97b972`
	);
	const data = await res.json();

	if (data) {
		loading = false;
		weatherData = data;
		addData();
	}
};
fetchWeatherData(cityName);

function addData() {
	if (!loading) {
		city.innerText = `City: ${weatherData.name}`;
		minTempPlaceholder.innerText = fahrenheitToCelsius(
			weatherData.main.temp_min
		);
		maxTempPlaceholder.innerText = fahrenheitToCelsius(
			weatherData.main.temp_max
		);
		humidityPlaceholder.innerText = weatherData.main.humidity;

		addWeatherIcon(weatherData.weather[0].main);
	}
}

function handleSearch() {
	cityName = inputBox.value;

	fetchWeatherData(cityName);
	inputBox.value = '';
	inputBox.focus();
}
function fahrenheitToCelsius(fahrenheit) {
	return Math.floor(((fahrenheit - 32) * 5) / 9);
}

function addWeatherIcon(weather) {
	weatherIcon.setAttribute('src', icons[weather]);
}

searchButton.addEventListener('click', handleSearch);
