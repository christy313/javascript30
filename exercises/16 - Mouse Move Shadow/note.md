## Day16 Mouse Move Shadow

### Summary

Detecting mousemove to find the position of x and y and add the style of text shadow.

### Practice

#### 1. Select hero and text

#### 2. Listen to the `mousemove` event and trigger the `shadow` function.

#### 3. The div element in HTML contains `offsetHeight` & `offsetWidth`, using offset to define the style.
- use `console.dir(hero)` to see the methods inside.

#### 4. The event contains `offsetX` & `offsetY`
- use `console.dir(e)` to see the methods inside.

#### 5. The div element contains a child h1, while moving the mouse the x & y value would generate extra value(from the child h1) even listening to the `mousemove` event of hero. 

### Improvement in the future

### Reference

1. [Understanding offsetWidth, clientWidth, scrollWidth and -Height, respectively](https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively)

![](https://i.stack.imgur.com/5AAyW.png)