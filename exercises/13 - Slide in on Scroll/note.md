## Day13 Slide in on Scroll

### Summary
While scrolling down at the halfway of every image but not to the image bottom, add a class named `active` to show the hidden image.

### Practice

#### 1. Write a function `checkSlide`, add event listener `scroll`

#### 2. Wrap the `checkSlide` function in the `debounce` function to prevent too many scrolling functions from evoking.

#### 3. Find out the height of each condition

- a. `slideInAt` variable keeps the value of the half-height of an image

- b. `imageBottom` variable calculates image current top position + image height.

- c. What I have learned in this app

  - c.1 window methods: scrollY, innerHeight

  - c.2 image: height

### Reference

1. [Dynamic Random Images](https://picsum.photos/)