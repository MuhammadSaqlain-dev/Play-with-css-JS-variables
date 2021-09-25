const inputs = document.querySelectorAll(".controls input");

function controlFunction() {
  const suffix = this.dataset.sizing || this.dataset.blur || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => {
  input.addEventListener("change", controlFunction);
  input.addEventListener("mousemove", controlFunction);
});
