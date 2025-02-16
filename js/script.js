// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if Dark Mode preference is saved in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️ Light Mode";
}

// Toggle Dark Mode
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        darkModeToggle.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        darkModeToggle.textContent = "🌙 Dark Mode";
    }
});

// Smooth Page Load Transition
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});
