const secondHand = document.querySelector(".second-hand");
const setClock = () => {
  const second = new Date().getSeconds();
  const secondDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
};

setInterval(setClock, 1000);
