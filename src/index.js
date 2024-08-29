function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");

  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature)
}

function searchCity(city) {
  let apiKey = "34de0f88df07da2f3ea19b0tcoa504f1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(refreshWeather).catch(error => {
    console.error('Error fetching weather data:', error.message);
  });
}

function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-city");
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");