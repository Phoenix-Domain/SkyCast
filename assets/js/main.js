const userLocation = document.querySelector('#location');
const loadingMsg = document.querySelector('#loadingMsg');
const showWeatherBtn = document.querySelector('#showWeatherBtn');
const temperature = document.querySelector('#temperature');
const feeling = document.querySelector('#feeling');
const weatherDescription = document.querySelector('#weatherDescription');
const city = document.querySelector('#city');
const errorMsg = document.querySelector('#errorMsg');

showWeatherBtn.addEventListener('click', e => {
  e.preventDefault();
  errorMsg.classList.remove('shown');
  const userLocationValue = encodeURIComponent(userLocation.value.trim());
  showLoadingMsg();
  getLocation(userLocationValue);
  userLocation.value = "";
})

const showLoadingMsg = () => {
    loadingMsg.classList.add('shown');
}

const getLocation = x => {
  getWeather(x)
}

const getWeather = async x => {
  userCity = x;
  try{
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=e0b6727643ae465d89e175552250807&q=${userCity}`);
    const data = await res.json();

    temperature.textContent = `Temperature: ${data.current.temp_c}Celsius`;

    feeling.textContent = `Feeling: ${data.current.feelslike_c}Celsius`;

    weatherDescription.textContent = `Weather: ${data.current.condition.text}`;

    city.textContent = `City: ${data.location.name}, ${data.location.country}`;
    
    loadingMsg.classList.remove('shown');
    
  } catch(err){

      errorMsg.classList.add('shown');

}}