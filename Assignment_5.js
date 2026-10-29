// Standard function with default parameters
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

// Arrow function with default parameters
const calculateArea = (length = 5, width = 4) => {
    return length * width;
};

console.log(
    "Standard Function Area (Default 5x4):",
    rectangleArea()
);

console.log(
    "Arrow Function Area (Custom 10x3):",
    calculateArea(10, 3)
);

// Block scope demonstration
{
    let blockVar = 100;
    console.log("Inside block:", blockVar);
}

// Accessing blockVar outside the block causes ReferenceError.
// Use try...catch to demonstrate the error safely.
try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error:", error.toString());
}