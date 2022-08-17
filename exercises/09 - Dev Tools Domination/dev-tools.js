const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#add8e6";
  p.style.fontSize = "50px";
}

// Regular
console.log("hi");

// Interpolated
console.log("hi, this is a %s string!", "interpolated");

// Styled
console.log("%c hello", "font-size: 32px; color: green;");

// warning!
console.warn("oh my god");

// Error :
console.error("this is a error");

// Info
console.info("this year is 2022");

// Testing
console.assert([] === [], "this is wrong");

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Henry");
console.count("Henry");
console.count("Henry");
console.count("Henry");
console.count("apple");
console.count("apple");
console.count("apple");
console.count("apple");
console.count("apple");

// timing
console.time("label");
console.timeEnd("label");

// table
console.table(DOMStringList);
