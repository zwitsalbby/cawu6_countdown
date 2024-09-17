// Countdown Timer
const countdownDate = new Date("Oct 22, 2024 00:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// To Do List
const tasks = ["Gym", "Pembukuan"];
const toDoList = document.getElementById('toDoList');
const newTaskInput = document.getElementById('newTask');
const addTaskBtn = document.getElementById('addTaskBtn');

function renderTasks() {
    toDoList.innerHTML = tasks.map(task => `<li><input type="checkbox">${task}</li>`).join('');
}

addTaskBtn.addEventListener('click', () => {
    const newTask = newTaskInput.value;
    if (newTask && tasks.length < 3) {
        tasks.push(newTask);
        newTaskInput.value = '';
        renderTasks();
    }
});

renderTasks();

// Greetings and Time
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} WIB`;

    document.getElementById('time').textContent = timeString;

    let greeting;
    if (hours >= 5 && hours <= 10) greeting = "Selamat Pagi!";
    else if (hours >= 11 && hours <= 15) greeting = "Selamat Siang!";
    else if (hours >= 15 && hours <= 18) greeting = "Selamat Sore!";
    else if (hours >= 19 && hours <= 21) greeting = "Selamat Malam!";
    else greeting = "Eh tidur lah!!!!!!!";

    document.getElementById('greeting').textContent = greeting;
}

setInterval(updateTime, 1000);
updateTime();

// Weather Simulation (you can enhance this by connecting to a real API)
function displayWeather() {
    const weather = "Sunny"; // Can be dynamic if API is used
    document.getElementById('weather').textContent = `${weather}, 30°C`;
    displayWeatherAnimation(weather);
}

displayWeather();

// Schedule Dropdown
function toggleSchedule(month) {
    const element = document.getElementById(month);
    element.classList.toggle('hidden');
}

// Motivational Quote Logic
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
