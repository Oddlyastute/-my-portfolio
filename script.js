// Light / Dark Mode Toggle

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (themeToggle && themeIcon) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeIcon.src = "dark_mode.svg";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            themeIcon.src = "light_mode.png";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        }

    });

}
