// Template literals use backticks (` `)
// and support:
//
// - string interpolation using ${}
// - multiline strings
// - embedded JavaScript expressions

// example
const name = "John";
const age = 20;

// Old way
const oldMessage = "Name: " + name + ", Age: " + age;
console.log(oldMessage);

// Template literals
const newMessage = `Name: ${name}, Age: ${age}`;
console.log(newMessage);

const html = `
    <div class="user">
        <h2>Name: ${name}</h2>
        <p>Age: ${age}</p>    
    </div>
`; // Indentation inside template literals becomes part of string.

// ANY valid JS expression works inside ${}
console.log(`Total: $${100 * 3}`); // Total: $300
console.log(`2 + 2 = ${2 + 2}`); // 2 + 2 = 4
console.log(`Uppercase: ${name.toUpperCase()}`); // Uppercase: JOHN
console.log(`Adult: ${age >= 18 ? "Yes" : "No"}`); // Adult: Yes
