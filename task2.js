// 1. Creating Array
let courses = ["HTML", "CSS", "JavaScript", "Python", "MySQL"];
console.log("Initial Courses:", courses);

// 2. Accessing Elements
console.log("First Course:", courses[0]);
console.log("Third Course:", courses[2]);

// 3. Updating Elements
courses[3] = "Python 3";
console.log("After Update:", courses);

// 4. Adding Elements
courses.push("React JS"); // Add at end
courses.unshift("Git");   // Add at start
console.log("After Push & Unshift:", courses);

// 5. Removing Elements
courses.pop();    // Removes last element
courses.shift();  // Removes first element
console.log("After Pop & Shift:", courses);

// 6. Basic Array Methods (includes, indexOf)
console.log("Index of JavaScript:", courses.indexOf("JavaScript"));
console.log("Has MySQL?:", courses.includes("MySQL"));

// 7. Iterating through Array (for loop & forEach)
console.log("--- Course List (for loop) ---");
for (let i = 0; i < courses.length; i++) {
    console.log((i + 1) + ". " + courses[i]);
}

console.log("--- Course List (forEach) ---");
courses.forEach(function(item, idx) {
    console.log("Item " + idx + ": " + item);
});
