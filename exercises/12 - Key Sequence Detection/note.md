## Day12 Key Sequence Detection

### Summary

Creating a Konami Code easter egg with vanilla JS.

### Practice

#### 1. Listening to the `e.key` to detect the key down event

#### 2. Counting from the end back to forth

If I start from the first character, it will always detect from the start and be limited to the six characters I set.

However, if I start from the end, it will detect the character change and check if the string match our setting.

### Future Improvement

### Reference

1. [Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#parameters)

If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If start is -Infinity, it will begin from index 0.