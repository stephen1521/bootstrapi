let dogButton = document.querySelector('#dogButton');
let dogImg = document.querySelector('#dogImg');

let randomDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        return res.json();
    })
    .then(data => {
        dogImg.src = data.message;
    })
}

randomDog();

dogButton.addEventListener('click', () => {
    randomDog();
})

let cityInput = document.querySelector('#cityInput');
let inputButton = document.querySelector('#inputButton');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let des = document.querySelector('#des');
let displayCity = document.querySelector('#city');
let city = '';

let cityApi = (city) => {
    fetch('https://goweather.herokuapp.com/weather/{' + encodeURI(city) + '}')
    .then(res => {
        return res.json();
    })
    .then(data => {
        temp.innerText = 'Temperature: ' + data.temperature;
        wind.innerText = 'Wind: ' + data.wind;
        des.innerText = 'Description: ' + data.description;
        displayCity.innerText = 'City: ' + city;
    })
}

inputButton.addEventListener('click', () => {
    city = cityInput.value;
    cityApi(city);
    cityInput.value = '';
})

let display = document.querySelector('#joke');
let jokeButton = document.querySelector('#jokeButton');

let joke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => {
        return res.json();
    })
    .then(data => {
        display.innerText = data.value;
    })
}

jokeButton.addEventListener('click', () => {
    joke();
})