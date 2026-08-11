    // showPopup is invoked here, and only here — right after a real,
    // successful recommendation submission.
    showPopup("Thanks! Your recommendation was added.");
});


// ========================================
// LIGHT / DARK MODE
// ========================================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.src = "dark_mode.svg";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeIcon.src = "light_mode.svg";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }

});
