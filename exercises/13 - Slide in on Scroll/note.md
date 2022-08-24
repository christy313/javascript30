## Day13 Slide in on Scroll

### Summary
While scrolling down at the half way of every image but not to the image bottom, add a class named `active` to show the hidden image.

### Practice

#### 1. Write a function `checkSlide`, add event listener `scroll`, and wrap the function in `debounce` function to prevent too many scrolling functions evoking.

#### 2. Find out the height of each conditions

- a. `slideInAt` variable is for when sliding the half height of an image, trigger

- b. Calculate the height form the top until every image bottom.

- c. What I have learned in this app

  - c.1 window methods: scrollY, innerHeight

  - c.2 image: height

### Reference

1. [Dynamic Random Images](https://picsum.photos/)