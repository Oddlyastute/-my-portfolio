// ================================
// LIGHT / DARK MODE
// ================================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check saved theme when page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("darkmode");
  themeIcon.src = "light_mode.png";
  themeToggle.setAttribute("aria-label", "Switch to light mode");
} else {
  document.body.classList.remove("darkmode");
  themeIcon.src = "dark_mode.png";
  themeToggle.setAttribute("aria-label", "Switch to dark mode");
}

// Toggle when clicked
themeToggle.addEventListener("click", function () {

  document.body.classList.toggle("darkmode");

  if (document.body.classList.contains("darkmode")) {

    themeIcon.src = "light_mode.png";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
    localStorage.setItem("theme", "dark");

  } else {

    themeIcon.src = "dark_mode.png";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
    localStorage.setItem("theme", "light");

  }

});
