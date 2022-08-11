// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsBornIn1500 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log("1. Get inventors who born in 1500", inventorsBornIn1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const inventorsFullName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log("2. Get inventors full name", inventorsFullName);

// Array.prototype.sort()
// 3. Sort the inventors by birth year, oldest to youngest

const inventorsOldToYoung = inventors.sort((elderInventor, youngerInventor) =>
  elderInventor.year > youngerInventor.year ? 1 : -1
);
console.log("3. Sort inventors from old to young", inventorsOldToYoung);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const inventorsAliveYears = inventors.reduce((totalYears, inventor) => {
  return totalYears + (inventor.passed - inventor.year);
}, 0);
console.log("4. Added up all inventors lived years", inventorsAliveYears);

// 5. Sort the inventors by years lived
// for example a is 87 years old, b is 50 years old, sort ordered like a to b

const inventorsAge = inventors.sort((elderInventor, youngerInventor) => {
  const olderAge = elderInventor.passed - elderInventor.year;
  const youngerAge = youngerInventor.passed - youngerInventor.year;
  return olderAge > youngerAge ? -1 : 1;
});

console.log("5. Sort inventors elder to younger", inventorsAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Get all links by query selector
// iterate every single item and filter with the name "de"

const category = document.querySelectorAll(".mw-category-group a");
const links = Array.from(category);

const streetsInParis = links
  .map((link) => link.innerHTML)
  .filter((street) => street.includes("de"));

console.log("6. Check out the array.js file in day04");

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log("7. Sort people with alphabetically by last name", people.sort());

// 8. Reduce Exercise
// Sum up the instances of each of these
const transportation = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const sumUpTransportation = transportation.reduce(
  (transportObj, transportWay) => {
    if (!transportObj[transportWay]) transportObj[transportWay] = 0;
    transportObj[transportWay]++;
    return transportObj;
  },
  {}
);

console.log("8. Sum up transport ways", sumUpTransportation);
