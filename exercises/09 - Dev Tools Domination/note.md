## Day09 Dev Tools Domination

### Summary

Some useful Dev Tools with console.

### Practice

#### 1. Interpolated
`console.log("hi, this is a %s string!", "interpolated");`

#### 2. Styled
`console.log("%c hello", "font-size: 32px; color: green;");`

#### 3. Testing
`console.assert([] === [], "this is wrong");`

#### 4. Clearing
`console.clear();` or in browser `clear()`

#### 5. Viewing DOM Elements

```javascript
const p = document.querySelector("p");
console.dir(p);
```

#### 6. Timing

```javascript
console.time("label");
console.timeEnd("label");
```