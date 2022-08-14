## Day06 Type Ahead

### Summary
Filter cities or states and populations with API data.

### Practice

#### 1. Get API data by fetch

#### 2. Wrote a filter function that filters the words in the search bar

RegExp with `match()` is much useful compared with `includes` in this function.

#### 3. Wrote a function to display the result

- 3.a Call `findPlace` function to get the result

- 3.b Put result in innerHTML

- 3.c In `displayHtml`, it will return an array from `map`. There would be a comma when you see it in between each place.

Join multiple strings in one string in the array that returned from `map` with `join()`.

#### 4. Highlight the search result with input words and format numbers by a comma with every three digits

### Reference

#### 1. [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

#### 2. [`match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

#### 3. [Using global and ignore case flags with match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#using_global_and_ignore_case_flags_with_match)

gi -> global & case insensitive

#### 4. [JavaScript format number with commas (example included)](https://sebhastian.com/javascript-format-number-commas/)
