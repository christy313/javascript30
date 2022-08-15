## Day08 Fun with HTML5 Canvas

### Summary

Drawing canvas with JavaScript.

### Practice

#### 1. Get canvas from id and draw on the `canvas.getContext("2d");`

#### 2. Set up width & height as window size

#### 3. Start drawing

```
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
```
#### 4. `mousedown` detects the start point

#### 5. `mousemove` execute `draw` function

#### 6. `mouseup` & `mouseout` stop drawing

### Reference

#### 1. [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

#### 2. [hsl()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl)