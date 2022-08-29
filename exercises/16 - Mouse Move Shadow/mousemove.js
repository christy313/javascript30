const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  console.log(e.offsetX);
  console.log("hero", hero.offsetWidth);

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = (x / width) * walk - walk / 2;
  // console.log(xWalk);
}

hero.addEventListener("mousemove", shadow);
