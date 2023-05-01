const container = document.getElementById("input");
const next = document.getElementById("add");

function addbookmark() {
  let name = document.createElement("input");
  name.placeholder = "name:\nlink:";
  name.className = "add";
  container.insertBefore(name, next);
}
