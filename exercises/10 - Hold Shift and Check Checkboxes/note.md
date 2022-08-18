## Day10 Hold Shift and Check Checkboxes

### Summary

Hold the shift key to check multiple checkboxes.

### Practice

#### 1. Select all checkbox and wrote a function named `handleCheck` with `addEventListener` to each of them

#### 2. At line 9, use OR `||` to make two directions work, checkbox from top to bottom and vice versa.

#### 3. At line 10 and 15, the first checkbox would be considered to inBetween too

#### 4. Set `inBetween` variable to control which checkbox should be checked.

### Future Improvement

- Hold on shift key to unchecked multiple boxes.

### Reference

1. [2.1 File name](https://google.github.io/styleguide/jsguide.html#file-name)

File names must be all lowercase and may include underscores (_) or dashes (-), but no additional punctuation. Follow the convention that your project uses. Filenames’ extension must be .js.

2. Using css to line through the content when checkbox checked.

[:checked](https://css-tricks.com/almanac/selectors/c/checked/)

```html
  <div class="item">
    <input type="checkbox" />
    <p>Don't forget to tweet your result!</p>
  </div>
```

```css
  input:checked + p {
    background: #f9f9f9;
    text-decoration: line-through;
  }
```