## Day02 JS and CSS Clock notes

### Summary
A clock runs with JavaScript current time.

### Practice

#### 1. clock hand transform

```css
transform-origin: 100% or right;
transform: rotate(90deg);
```

#### 2. clock hand goes a little bit back and forth

```css
transition: all 0.05s ease;
transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
```

#### 3. Make the second rotate as the `new Date().getSeconds()`

- a. Make a function to run every seconds
- b. Get second
- c. Turn second to degree and integrate in clock

### Reference

- [transform-origin](https://css-tricks.com/almanac/properties/t/transform-origin/)

- [transition](https://css-tricks.com/almanac/properties/t/transition/)

- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

- [JavaScript HTML DOM - Changing CSS](https://www.w3schools.com/js/js_htmldom_css.asp)
