function debounce(func, wait = 20, immediate = true) {
  let timeout;

  return function () {
    let context = this,
      args = arguments;

    function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }
    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll(".slide-in");

function checkSlide() {
  images.forEach((image) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    isHalfShown && isNotScrolledPast
      ? image.classList.add("active")
      : image.classList.remove("active");
  });
}

window.addEventListener("scroll", debounce(checkSlide));
