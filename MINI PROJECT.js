// Capstone: Product Inventory & Analytics Dashboard

console.log("--- Initializing Inventory System ---");

// Initial inventory
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Get product details from the user
let productName = prompt("Enter new product name:");
let productPrice = Number(prompt("Enter product price:"));

// Validate input using if...else
if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid product details. Product not added.");
} else {
    // Add new product
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    console.log(
        `[Prompt executed: User adds "${productName.trim()}" at "$${productPrice}"]`
    );
}

// Function to determine product category
function getCategory(price) {
    let category;

    if (price < 50) {
        category = "Budget";
    } else if (price < 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    // Switch statement
    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}

// Arrow function to calculate total inventory value
const calculateTotal = items =>
    items.reduce((sum, item) => sum + item.price, 0);

// Arrow function for tax calculation
const calculateTax = (amount, taxRate = 10) =>
    amount * taxRate / 100;

// Process inventory using forEach()
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(item => {
    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
    );
});

// Financial analytics
console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);

console.log("Total Inventory Value: $" + totalValue);

// Filter affordable items
const affordableItems = inventory.filter(item => item.price < 200);

console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableItems.map(item => item.name))
);

// Create formatted report using map()
const report = inventory.map(
    item => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List:", JSON.stringify(report));

// Tax calculation example
const tax = calculateTax(totalValue, 10);

console.log("Tax at 10%: $" + tax);
console.log("Total Including Tax: $" + (totalValue + tax));