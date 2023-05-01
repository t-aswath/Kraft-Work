const container = document.getElementById("input");

function addbookmark() {
  let name = document.createElement("input");
  let link = document.createElement("input");
  name.placeholder = "name";
  link.placeholder = "link";
  name.className = "add";
  link.className = "add";
  container.appendChild(name);
}
