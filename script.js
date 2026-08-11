// ================================
// LIGHT / DARK MODE
// ================================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("darkmode");
  themeIcon.textContent = "☀";
  themeToggle.setAttribute("aria-label", "Switch to light mode");
  themeToggle.setAttribute("title", "Switch to light mode");
}

themeToggle.addEventListener("click", function () {

  document.body.classList.toggle("darkmode");

  if (document.body.classList.contains("darkmode")) {

    themeIcon.textContent = "☀";

    localStorage.setItem("theme", "dark");

    themeToggle.setAttribute(
      "aria-label",
      "Switch to light mode"
    );

    themeToggle.setAttribute(
      "title",
      "Switch to light mode"
    );

  } else {

    themeIcon.textContent = "☾";

    localStorage.setItem("theme", "light");

    themeToggle.setAttribute(
      "aria-label",
      "Switch to dark mode"
    );

    themeToggle.setAttribute(
      "title",
      "Switch to dark mode"
    );

  }

});
