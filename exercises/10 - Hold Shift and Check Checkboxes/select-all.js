const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
let lastChecked;

const handleCheck = (e) => {
  let inBetween = false;

  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        console.log("target", checkbox);
        inBetween = !inBetween;
      }

      if (inBetween) {
        console.log("inBetween", checkbox);
        checkbox.checked = true;
      }
    });
  }

  lastChecked = e.target;
};

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
