// Shows a temporary popup message.
// This function only runs when it is called explicitly — it never fires
// on page load, only after a successful recommendation submission below.
function showPopup(message) {
    var popup = document.getElementById("popup");
    if (!popup) return;
  
    popup.textContent = message;
    popup.classList.add("show");
  
    clearTimeout(showPopup._timer);
    showPopup._timer = setTimeout(function () {
      popup.classList.remove("show");
    }, 3000);
  }
  
  // The <script> tag is placed at the end of <body>, so the form already
  // exists in the DOM by the time this code runs.
  var recommendationForm = document.getElementById("recommendation-form");
  var recommendationsList = document.querySelector(".recommendations-list");
  
  recommendationForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    var nameInput = document.getElementById("rec-name");
    var messageInput = document.getElementById("rec-message");
    var message = messageInput.value.trim();
  
    if (!message) {
      return; // no message entered, so no new recommendation and no popup
    }
  
    var name = nameInput.value.trim() || "Anonymous";
  
    var card = document.createElement("div");
    card.className = "recommendation new-recommendation";
    card.innerHTML =
      '<p>"' + message + '"</p>' +
      '<span class="rec-author">— ' + name + "</span>";
  
    recommendationsList.appendChild(card);
    recommendationForm.reset();
  
    // showPopup is invoked here, and only here — right after a real,
    // successful recommendation submission.
    showPopup("Thanks! Your recommendation was added.");
  });