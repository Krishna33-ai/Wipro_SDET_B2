// 1. Logging Names – forEach
const names = ['Alice', 'Bob', 'Charlie'];

// Loop and log greeting
names.forEach(name => {
    console.log("Hello, " + name);
});


// 2. Temperature Conversion – map
const tempsC = [0, 10, 20, 30];

// Convert C → F
const tempsF = tempsC.map(c => (c * 1.8) + 32);

console.log(tempsF);


// 3. Finding Adults – filter
const users = [
    { name: 'Li', age: 16 },
    { name: 'Dan', age: 22 },
    { name: 'Sarah', age: 17 }
];

// Keep age ≥ 18
const adults = users.filter(user => user.age >= 18);

console.log(adults);


// 4. String Lengths – filter
function longStrings(arr) {
    // Keep strings > 5 chars
    return arr.filter(str => str.length > 5);
}

console.log(longStrings(['apple', 'banana', 'grapes', 'kiwi']));


// 5. Total Cost – reduce
const prices = [19.99, 5.50, 3.99, 25.00];

// Sum all prices
const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);


// 6. Counting Occurrences – reduce
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

// Count "apple"
const count = fruits.reduce((acc, item) => {
    if (item === 'apple') {
        acc++;
    }
    return acc;
}, 0);

console.log(count);


// 7. Array Transformation – filter + map
const numbers = [1, 2, 3, 4, 5, 6];

// Even → square
const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * num);

console.log(result);


// 8. Object Extraction – map
const products = [
    { id: 1, title: 'Laptop' },
    { id: 2, title: 'Mouse' }
];

// Extract titles
const titles = products.map(p => p.title);

console.log(titles);


// 9. Average – reduce
const scores = [80, 90, 70, 100];

// Avg = sum / count
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log(average);


// 10. Flattening – reduce
const nested = [[1, 2], [3, 4], [5, 6]];

// Merge arrays
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);
