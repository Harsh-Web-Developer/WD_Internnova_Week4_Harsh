// Object 1: Student Record
let student = {
    id: 101,
    name: "Harsh Meena",
    course: "BCA AIML",
    semester: 3,
    isPassed: true
};

// Object 2: Laptop Specs
let laptop = {
    brand: "Dell",
    model: "Latitude 7420",
    ram: "16GB",
    ssd: "512GB",
    processor: "Intel i7"
};

// Object 3: Project Info
let project = {
    title: "Kavach AI",
    category: "Cybersecurity",
    teamSize: 3,
    status: "Completed"
};

// Accessing Properties (Dot & Bracket notation)
console.log("Student Name:", student.name);
console.log("Laptop Processor:", laptop["processor"]);

// Updating Properties
student.semester = 4;
laptop.ram = "32GB";

// Adding New Properties
student.college = "JBKP";
project.repoUrl = "https://github.com/Harsh-Web-Developer";

// Removing Properties
delete project.teamSize;

// Displaying Updated Objects
console.log("Updated Student:", student);
console.log("Updated Laptop:", laptop);
console.log("Updated Project:", project);