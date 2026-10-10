// Selecting HTML Elements
const heading = document.getElementById("main-heading");
const paragraph = document.querySelector(".description");
const techList = document.getElementById("tech-list");

const changeBtn = document.getElementById("change-text-btn");
const addBtn = document.getElementById("add-item-btn");
const removeBtn = document.getElementById("remove-item-btn");

// Changing Text Content & Styles dynamically
changeBtn.addEventListener("click", function() {
    heading.textContent = "DOM Manipulated Successfully!";
    paragraph.innerHTML = "Content updated via <b>JavaScript DOM methods</b>.";
    
    // Changing CSS Styles
    heading.style.color = "#16a34a";
    paragraph.classList.toggle("highlight");
});

// Adding New Elements
addBtn.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "JavaScript ES6";
    techList.appendChild(newItem);
});

// Removing Elements
removeBtn.addEventListener("click", function() {
    let lastItem = techList.lastElementChild;
    if (lastItem) {
        techList.removeChild(lastItem);
    }
});