const container = document.getElementById("input");
const next = document.getElementById("add");

function addcharts() {
  let name = document.createElement("input");
  name.placeholder = "img";
  name.className = "add";
  container.insertBefore(name, next);
}
