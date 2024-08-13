// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Function to fetch and display weather
function fetchWeather() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.2088&longitude=106.8456&current_weather=true')
    .then(response => response.json())
    .then(data => {
        const weather = data.current_weather;
        const temperature = weather.temperature;
        const description = getDescription(weather.weathercode);
        document.getElementById('weather').innerText = `Jakarta: ${temperature}°C, ${description}`;
    });
}

// Function to get description from weather code (simplified example)
function getDescription(code) {
    switch(code) {
        case 0: return "Clear Sky";
        case 1: return "Mainly Clear";
        case 2: return "Partly Cloudy";
        case 3: return "Overcast";
        default: return "Unknown";
    }
}

// Function to toggle dark/light mode
function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var themeLabel = document.getElementById("mode-label");
    if (body.classList.contains("dark-mode")) {
        themeLabel.innerText = "Dark Mode";
    } else {
        themeLabel.innerText = "Light Mode";
    }
}

// Function to display greeting based on time of day
function displayGreeting() {
    var now = new Date();
    var hours = now.getHours();
    var greeting = "";
    var timezone = "Jakarta (GMT+7)";
    var timeText = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0');

    if (hours >= 5 && hours <= 10) {
        greeting = "Selamat Pagi!";
    } else if (hours >= 11 && hours <= 15) {
        greeting = "Selamat Siang!";
    } else if (hours >= 15 && hours <= 18) {
        greeting = "Selamat Sore!";
    } else if (hours >= 19 && hours <= 21) {
        greeting = "Selamat Malam!";
    } else {
        greeting = "Eh tidur lah!!!!!!!";
    }

    document.getElementById("greeting").innerText = `${greeting} (${timeText} - ${timezone})`;
}

// Function to load and save checkbox state
function loadCheckboxState() {
    document.querySelectorAll('.todo-item input').forEach(function(checkbox, index) {
        var checked = localStorage.getItem('todo-checkbox-' + index);
        if (checked === 'true') {
            checkbox.checked = true;
        }
        checkbox.addEventListener('change', function() {
            localStorage.setItem('todo-checkbox-' + index, checkbox.checked);
        });
    });
}

// Function to add new to-do items
function addTodoItem() {
    var todoInput = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");

    if (todoInput.value.trim() !== "" && todoList.children.length < 3) {
        var newItem = document.createElement("li");
        newItem.classList.add("todo-item");
        newItem.innerHTML = `
            <input type="checkbox">
            <span>${todoInput.value}</span>
        `;
        todoList.appendChild(newItem);

        // Save to localStorage
        localStorage.setItem('todo-checkbox-' + (todoList.children.length - 1), false);

        // Add event listener to the new checkbox
        newItem.querySelector("input").addEventListener('change', function() {
            localStorage.setItem('todo-checkbox-' + (todoList.children.length - 1), this.checked);
        });

        todoInput.value = "";
    }
}

// Dropdown functionality
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        var dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('active');
    });
});

// Load the weather, greeting, and checkbox state on page load
window.onload = function() {
    fetchWeather();
    displayGreeting();
    loadCheckboxState();
    document.getElementById("theme-toggle").addEventListener("change", toggleTheme);
    document.getElementById("add-todo").addEventListener("click", addTodoItem);
};
