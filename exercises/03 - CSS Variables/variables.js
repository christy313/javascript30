const inputs = document.querySelectorAll("input");

const handleUpdate = (changeTarget) => {
  const suffix = changeTarget.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${changeTarget.name}`,
    `${changeTarget.value}${suffix}`
  );
};
inputs.forEach((input) =>
  input.addEventListener("change", () => handleUpdate(input))
);
inputs.forEach((input) =>
  input.addEventListener("mousemove", () => handleUpdate(input))
);
