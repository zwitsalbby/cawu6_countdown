// Countdown logic
var countDownDate = new Date("Oct 25, 2024 00:00:00").getTime();
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerText = "EXPIRED";
    }
}, 1000);

// Greetings logic
function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    let greeting;

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

    document.getElementById("greeting").innerText = greeting;
    document.getElementById("time").innerText = `${hours}:${minutes} WIB`;
}

setInterval(updateGreeting, 1000);
updateGreeting();

// Theme toggle
const toggleSwitch = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Dropdown functionality for exam list
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const dropdownContent = button.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

// TODO list logic
document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTodoBtn = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");

    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach(todo => {
        addTodoItem(todo.text, todo.checked);
    });

    addTodoBtn.addEventListener("click", () => {
        const todoText = todoInput.value.trim();
        if (todoText && todoList.children.length < 6) {
            addTodoItem(todoText, false);
            saveTodos();
            todoInput.value = "";
        }
    });

    todoList.addEventListener("change", saveTodos);

    function addTodoItem(text, checked) {
        const li = document.createElement("li");
        li.className = "todo-item";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = checked;
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(" " + text));
        todoList.appendChild(li);
    }

    function saveTodos() {
        const todos = [];
        todoList.querySelectorAll("li").forEach(li => {
            todos.push({
                text: li.textContent.trim(),
                checked: li.querySelector("input").checked
            });
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    }
});

// Weather API integration (example placeholder)
function updateWeather() {
    document.getElementById("weather").innerText = "Sunny, 30°C"; // Example placeholder
}

updateWeather();
