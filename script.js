// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Toggle visibility of the schedule lists
function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

// Save checkbox state
function updateCheckbox(element) {
    localStorage.setItem(element.id, element.checked);
}

// Load checkbox state
function loadCheckboxState() {
    var checkboxes = document.querySelectorAll('#todo-list input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        var checked = localStorage.getItem(checkbox.id) === 'true';
        checkbox.checked = checked;
    });
}

// Add a new item to the to-do list
function addItem() {
    var input = document.getElementById("new-item");
    var newItem = input.value.trim();

    if (newItem !== "") {
        var list = document.getElementById("todo-list");
        var newItems = list.querySelectorAll('li.new-item');

        if (newItems.length < 3) {
            var li = document.createElement("li");
            li.classList.add("new-item");
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "new-" + newItems.length;
            checkbox.onchange = function() { updateCheckbox(checkbox); };
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(" " + newItem));
            list.appendChild(li);
            input.value = "";
            updateCheckbox(checkbox); // Save the new checkbox state
        } else {
            alert("Maksimal 3 aktivitas baru!");
        }
    }
}

// Function to display greeting based on time
function displayGreeting() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var greeting = "";

    if (hours >= 5 && hours < 11) {
        greeting = "Selamat Pagi!";
    } else if (hours >= 11 && hours <= 15 && minutes <= 30) {
        greeting = "Selamat Siang!";
    } else if (hours >= 15 && (hours < 18 || (hours == 15 && minutes > 30))) {
        greeting = "Selamat Sore!";
    } else if (hours >= 19 && (hours <= 21 && minutes <= 30)) {
        greeting = "Selamat Malam!";
    } else {
        greeting = "Eh tidur lah!!!!!!!";
    }

    // Display greeting
    document.getElementById("greeting").innerText = greeting;

    // Display Jakarta time
    document.getElementById("time").innerText = now.toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

// Call the displayGreeting function on page load
window.onload = function() {
    displayGreeting();
    loadCheckboxState(); // load the checkbox state
};

// Optionally, update the greeting every minute if needed
setInterval(displayGreeting, 60000);
