// Display Time
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('time').innerText = `${hours}:${minutes} WIB`;

    let greeting = "Selamat Malam!";
    if (hours >= 5 && hours <= 10) greeting = "Selamat Pagi!";
    else if (hours >= 11 && hours <= 15) greeting = "Selamat Siang!";
    else if (hours >= 15 && hours <= 18) greeting = "Selamat Sore!";
    else if (hours >= 21 && hours <= 23) greeting = "Eh tidur lah!!!!!!!";

    document.getElementById('greeting').innerText = greeting;
}

setInterval(updateTime, 1000);

// Motivational Quote
const quotes = [
    "Keep pushing forward!",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal.",
    "Don't watch the clock; do what it does. Keep going.",
    "Hardships often prepare ordinary people for an extraordinary destiny."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('motivationalQuote').innerText = quotes[randomIndex];
}

getRandomQuote(); // Call this when page loads

// Weather Animation Logic
function displayWeatherAnimation(weather) {
    const weatherElement = document.getElementById('weatherAnimation');
    if (weather === "Sunny") {
        weatherElement.innerHTML = '<div class="sun"></div>';
    }
}

// Dark/Light Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.style.setProperty('--bg-color', '#333');
        document.documentElement.style.setProperty('--text-color', '#fff');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#f4f4f4');
        document.documentElement.style.setProperty('--text-color', '#000');
    }
});
