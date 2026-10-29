const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// forEach()
console.log("-- All Products (forEach) --");

products.forEach(product => {
    console.log(
        `Item: ${product.name} - Price: $${product.price}`
    );
});

// filter()
console.log("\n-- Filtered Products (Price < $50) --");

const affordable = products.filter(product => product.price < 50);

console.log(affordable);

// map()
console.log("\n-- Mapped Product Tags (map) --");

const tags = products.map(
    product => `${product.name.toUpperCase()} costs $${product.price}`
);

console.log(JSON.stringify(tags));