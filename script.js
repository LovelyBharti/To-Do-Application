
// Get the input box and list container elements from the HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add a cross icon to delete the added notes using span tag
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);

        // Clear the input box after adding the task
        inputBox.value = '';
        saveData();
    }
}

// Event listener for click events on the list container
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // Toggle the checked class for list items
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the task when the span (cross) is clicked
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display the saved data from local storage
function showData() {
    let savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// Call showData to display the tasks when the page is loaded
showData();


