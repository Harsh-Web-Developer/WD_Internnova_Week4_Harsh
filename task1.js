// Function Declaration
function greetUser(name) {
    return "Hello " + name + ", welcome to Week 4!";
}

// Function with parameters and return value
function calculateTotal(price, qty) {
    let subtotal = price * qty;
    let tax = subtotal * 0.05; // 5% tax
    return subtotal + tax;
}

// Multiple functions working together
function getGrade(score) {
    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 50) return "C";
    return "F";
}

function generateReport(studentName, score) {
    let grade = getGrade(score);
    return studentName + " scored " + score + " marks and got Grade " + grade;
}

// Arrow Function
const calculateDiscount = (total, discountPercent) => {
    return total - (total * (discountPercent / 100));
};

// Executing functions
console.log(greetUser("Harsh"));

let totalBill = calculateTotal(250, 4);
console.log("Total Bill (with tax): $" + totalBill);

console.log(generateReport("Nishant", 85));
console.log(generateReport("Shivam", 45));

let finalPrice = calculateDiscount(1000, 10);
console.log("Discounted Price: $" + finalPrice);