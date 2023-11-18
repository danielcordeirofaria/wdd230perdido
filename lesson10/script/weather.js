const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const lat = 49.75;
const long = 6.64;
const key = "3fd567ec38f593abe6ddc29dd6159dcd";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`;

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const desc = data.weather[0].description
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('width', 100)
    captionDesc.textContent = desc;
}

apiFetch();
