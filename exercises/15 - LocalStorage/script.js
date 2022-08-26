const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const clearAllButton = document.querySelector(".clear-all");
const checkAllButton = document.querySelector(".check-all");
const uncheckAllButton = document.querySelector(".uncheck-all");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }>
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
clearAllButton.addEventListener("click", clearAll);
checkAllButton.addEventListener("click", checkAll);
uncheckAllButton.addEventListener("click", uncheckAll);

populateList(items, itemsList);
