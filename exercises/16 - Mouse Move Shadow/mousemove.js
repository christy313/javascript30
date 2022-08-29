const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const hi = document.querySelector(".hi");

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  console.dir(e);
}

hero.addEventListener("mousemove", shadow);
