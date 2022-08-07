## Day01 JavaScript Drum Kit notes

### Summary

While hitting the related key on your keyboard, it will make a drum sound with CSS yellow outline transition.

When I declared the `removeTransition` function, I couldn't use arrow function because the `this` would be different.

### Reference

1. [keycode](https://www.toptal.com/developers/keycode" target="_blank)

2. [HTML data-* Attribute](https://www.w3schools.com/tags/att_data-.asp)

3. [Difference between document.addEventListener and window.addEventListener?](https://stackoverflow.com/questions/12045440/difference-between-document-addeventlistener-and-window-addeventlistener)

4. [KeyboardEvent.keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) has already deprecated, I used [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) instead.

5. To get attribute by dataset: [Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)