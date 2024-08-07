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
        var checked = localStorage.getItem(checkbox.id);
        if (checked !== null) {
            checkbox.checked = (checked === 'true');
        }
    });
}

// Add new item to the to-do list
function addItem() {
    var newItem = document.getElementById('new-item').value;
    if (newItem.trim() !== "") {
        var ul = document.getElementById('todo-list');
        var listItems = ul.getElementsByTagName('li');
        if (listItems.length < 6) {
            var li = document.createElement('li');
            var input = document.createElement('input');
            input.type = 'checkbox';
            input.onchange = function() {
                updateCheckbox(input);
            };
            li.appendChild(input);
            li.appendChild(document.createTextNode(" " + newItem));
            ul.appendChild(li);
            document.getElementById('new-item').value = "";
        } else {
            alert("Maximum of 3 additional items allowed.");
        }
    }
}

// Load the checkbox state on page load
window.onload = function() {
    loadCheckboxState();
};
