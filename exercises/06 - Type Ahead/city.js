const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const places = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => places.push(...data));

const formatNumbers = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const findPlace = (searchPlace, places) => {
  return places.filter((place) => {
    const re = new RegExp(searchPlace, "gi");
    return place.city.match(re) || place.state.match(re);
  });
};

const displayPlace = (e) => {
  const findPlaceResult = findPlace(e.target.value, places);
  const displayHtml = findPlaceResult
    .map((place) => {
      const re = new RegExp(e.target.value, "gi");
      const highlightCity = place.city.replace(
        re,
        `<span class="highlight">${e.target.value}</span>`
      );
      const highlightState = place.state.replace(
        re,
        `<span class="highlight">${e.target.value}</span>`
      );

      return `
        <li>
          <span class="name">${highlightCity}, ${highlightState}</span>
          <span class="population">${formatNumbers(place.population)}</span>
        </li>
      `;
    })
    .join("");
  document.querySelector(".suggestions").innerHTML = displayHtml;
};

document.querySelector(".search").addEventListener("keyup", displayPlace);
document.querySelector(".search").addEventListener("change", displayPlace);
