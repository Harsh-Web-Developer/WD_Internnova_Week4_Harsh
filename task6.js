// Array to hold Student Objects
let students = [];

// DOM Elements Selection
const studentForm = document.getElementById("student-form");
const nameInput = document.getElementById("s-name");
const courseInput = document.getElementById("s-course");
const marksInput = document.getElementById("s-marks");
const tableBody = document.getElementById("table-body");
const emptyMsg = document.getElementById("empty-msg");

// Function: Render Students to DOM
function renderTable() {
    tableBody.innerHTML = "";

    if (students.length === 0) {
        emptyMsg.style.display = "block";
        return;
    }

    emptyMsg.style.display = "none";

    students.forEach(function(student, index) {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.marks}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;

        tableBody.appendChild(row);
    });
}

// Function: Add Student (Event Handler)
studentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let newStudent = {
        name: nameInput.value.trim(),
        course: courseInput.value.trim(),
        marks: Number(marksInput.value)
    };

    students.push(newStudent);

    // Clear form inputs
    nameInput.value = "";
    courseInput.value = "";
    marksInput.value = "";

    renderTable();
});

// Function: Delete Student
function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}