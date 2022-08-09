## Day02 JS and CSS Clock notes

### Summary
A clock runs with JavaScript current time.

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

### Reference

- [transform-origin](https://css-tricks.com/almanac/properties/t/transform-origin/)

