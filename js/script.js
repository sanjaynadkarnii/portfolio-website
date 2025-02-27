// Ensure script runs after the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (!darkModeToggle) {
        console.error("Dark mode toggle button not found!");
        return;
    }

    // Function to enable Dark Mode
    function enableDarkMode() {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        darkModeToggle.textContent = "☀️ Light Mode";
    }

    // Function to disable Dark Mode
    function disableDarkMode() {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
        darkModeToggle.textContent = "🌙 Dark Mode";
    }

    // Check Dark Mode preference on page load and apply the correct mode
    if (localStorage.getItem("dark-mode") === "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Toggle Dark Mode when button is clicked
    darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Ensure page transitions smoothly after applying the theme
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});
