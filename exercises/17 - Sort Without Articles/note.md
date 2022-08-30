## Day17 Sort Without Articles

### Summary

Sort band names in an array without defined or undefined articles such as "a", "an" and "the".

```javascript
// input
[
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];
```

```javascript
//output
[
  "Anywhere But Here",
  "The Devil Wears Prada",
  "An Old Dog",
  "Pierce the Veil",
  "The Plot in You",
  "A Skylit Drive",
];
```

### Practice

#### 1. Sort array in order

Alphabet letters could be compared with the comparisons + or -.

```javascript
const arr = ["B", "A", "C"];
arr.sort((a, b) => (a > b ? 1 : -1));

// output ["A", "B", "C"];
```

#### 2. Wrote a function named strip to remove defined & undefined articles by regular expression + `replace()`

- a. regular expression

```javascript
/^(a |the |an )/i
```

#### 3. Put the array into `innerHTML` as a big string in the DOM 

When setting something in innerHTML which is not a string, it will automatically call toString().

The point is when we use `innerHTML`, it supposed to return a big string.

### Reference

- 1. [Advanced searching with flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags)
