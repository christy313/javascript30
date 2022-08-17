## Day10 Hold Shift and Check Checkboxes

### Summary

Hold the shift key to select multiple checkboxes.

### Practice

#### 1. Select all checkbox and addEventListener to them

#### 2. 

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