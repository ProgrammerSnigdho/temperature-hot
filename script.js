numberOfSearch = 0;
apiKey = "c25ec30b38a44587afd152223202612";
function getWeather(city) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

function displayWeather(weather) {
    document.getElementById('weather').innerHTML = weather.current.temp_c;
    document.getElementById('weatherCity').innerHTML = weather.location.name;
    document.getElementById('weatherConditionImg').src = weather.current.condition.icon;
    document.getElementById('weatherConditionText').innerText = weather.current.condition.text;
}

document.getElementById('search').addEventListener('click', ()=>{
    const city = document.getElementById('searchCity').value
    getWeather(city)
    document.getElementById('searchCity').value = ""
    numberOfSearch += 1;
})
if (numberOfSearch == 0){
    getWeather("Dhaka")
}