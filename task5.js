const usernameInput = document.getElementById("username");
const livePreview = document.getElementById("live-preview");
const roleSelect = document.getElementById("role-select");
const roleMsg = document.getElementById("role-msg");
const userForm = document.getElementById("user-form");
const statusBox = document.getElementById("status-box");

// 1. input Event
usernameInput.addEventListener("input", function(e) {
    livePreview.textContent = "Preview: " + e.target.value;
});

// 2. change Event
roleSelect.addEventListener("change", function(e) {
    if (e.target.value) {
        roleMsg.textContent = "Selected Role: " + e.target.value;
        roleMsg.style.color = "#2563eb";
    } else {
        roleMsg.textContent = "";
    }
});

// 3. submit Event
userForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Stop page reload
    if (usernameInput.value.trim() === "") {
        alert("Please enter your name!");
    } else {
        alert("Form submitted successfully for " + usernameInput.value);
    }
});

// 4. Mouse Events (mouseover & mouseout)
statusBox.addEventListener("mouseover", function() {
    statusBox.style.backgroundColor = "#0284c7";
    statusBox.style.color = "#ffffff";
    statusBox.textContent = "Mouse Over!";
});

statusBox.addEventListener("mouseout", function() {
    statusBox.style.backgroundColor = "#cbd5e1";
    statusBox.style.color = "#000000";
    statusBox.textContent = "Hover or click this box";
});

// 5. click Event
statusBox.addEventListener("click", function() {
    alert("Box Clicked!");
});