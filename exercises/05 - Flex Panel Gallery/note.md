## Day05 Flex Panel Gallery

### Summary

### Practice

#### 1. Align every panel vertically with `display: flex;`

#### 2. Make every panel equally with `flex: 1;`

#### 3. Divided texts into three sections and center the texts
Flex property with `flex: 1 0 auto;` see ref 3.

#### 4. Hide top & bottom text with `transform: translateY()`

#### 5. When clicking the panel, the text becomes larger & triggers the transition.
- 5.a Select all panels
- 5.b Toggle class name open in the clicked panel
- 5.c Listen to `transitionend` and toggle class name open-active 

### Reference

#### 1. [flex-direction](https://css-tricks.com/almanac/properties/f/flex-direction/)

#### 2. [Equal Columns With Flexbox: It’s More Complicated Than You Might Think](https://css-tricks.com/equal-columns-with-flexbox-its-more-complicated-than-you-might-think/)

#### 3. [flex](https://css-tricks.com/almanac/properties/f/flex/)

The flex property is the shorthand for [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow), [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) and flex-basis.

#### 4. `panel > *` vs `panel *`

A space selector will select all deep descendants.
A greater than selector will only select all immediate descendants.(only next children)