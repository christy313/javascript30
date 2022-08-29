## Day16 Mouse Move Shadow

### Summary

Detecting `mousemove` event to find the position of x and y and add the style of text-shadow.

### Practice

#### 1. Select hero and text element.

#### 2. Listen to the `mousemove` event and trigger the `shadow` function.

#### 3. The div element in HTML contains `offsetHeight` & `offsetWidth`, using offset to define the style.

- use `console.dir(hero)` to see the methods inside.

#### 4. The event contains `offsetX` & `offsetY`

- use `console.dir(e)` to see the methods inside.

#### 5. `h1` element has its own x & y value when it's inside a div

- a. The `hero` element has `offsetWidth` & `offsetHeight` as the position values.

- b. The `h1` is in the `hero`.

- c. While moving the mouse, `h1` will have its own x & y 

- d. Calculating its position values below:

```javascript
if (this !== e.target) {
  x += e.target.offsetLeft;
  y += e.target.offsetTop;
}
```

#### 6. Change the text-shadow style

### Improvement in the future

### Reference

1. [Understanding offsetWidth, clientWidth, scrollWidth and -Height, respectively](https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively)

![](https://i.stack.imgur.com/5AAyW.png)