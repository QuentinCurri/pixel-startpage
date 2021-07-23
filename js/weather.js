
const temp = document.querySelector("#temp p")

const token = YOUR_API_TOKEN; // Your API Token from https://openweathermap.org/api
const lat = YOUR_LAT; // latitude coordinates
const long = YOUR_LONG; // longitude coordinates
const units = 'imperial'; // put your units here (imperial = fahrenheit, metric = celsius, standard = kelvin)
const unitSymbols = {
    imperial: "F",
    metric : "C",
    standard: "K",
}; // Unit symbol based on what temperature units you selected.

let getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${token}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let tempElement = Math.round(data.main.temp);
        temp.innerHTML = tempElement + '°' + unitSymbols.unitName; //use unitSymbols.unitName (imperial, metric, or standard) to have the correct labels.
    })
}

getWeather();

setInterval(getWeather, 300000);

