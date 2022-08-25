// start with strings, numbers and booleans
let age = 10;
const age2 = age;
console.log(age, age2); // 10, 10
age = 200;
console.log(age, age2); // 200, 10

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
team[3] = "lux";

// however what happens when we update that array?
// If update an array, it will reference back.

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy.
// They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:

const captain = person;
// it will reference to the person object and add a new property.
captain.number = 99;

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 99 });

// We will hopefully soon see the object ...spread
const captain3 = { ...person };

// Things to note - this is only 1 level deep - both for Arrays and Objects.
// lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: "wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

// deep clone
const dev2 = JSON.parse(JSON.stringify(wes)); // Wes doesn't recommend this one
dev2.social.twitter = "hi";

const dev3 = structuredClone(wes);
dev3.social.facebook = "hello";
