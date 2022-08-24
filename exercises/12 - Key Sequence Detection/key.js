const pressed = [];
const secretCode = "wesbos";
window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // console.log(-secretCode.length - 1);
  // console.log(pressed.length);
  console.log(pressed);
});

// (-7, 1)
