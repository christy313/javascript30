## Day14 JavaScript References VS Copying

### Summary

Learn array and object:
- Pass by reference and pass by value
- Deep clone vs shallow clone

### Practice

#### 1. Copy a new array from the original one

```javascript
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];

const team5 = Array.from(players);
```

#### 2. Shallow copy of an object

```javascript
const wes = {
  name: "wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

const dev = {...wes}
const dev1 = Object.create(wes)
const dev2 = Object.assign(wes)
```

#### 3. Deep copy an object

```javascript
const dev2 = JSON.parse(JSON.stringify(wes));
const dev4 = structuredClone(wes);
```

### Reference

1. [Shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)

2. [Deep copy](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy)